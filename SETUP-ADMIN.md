# Setup: cadastro de apoiadores + painel admin

Este site agora tem:

- Formulário público (`#cadastro`) que grava nome, e-mail, WhatsApp e bairro num banco de dados real.
- Painel administrativo em `/admin` (login em `/admin/login`) para ver a lista de apoiadores e disparar e-mails de novidade para todos eles de uma vez.
- Exportação em CSV da lista (nome/e-mail/WhatsApp) para envio manual de WhatsApp, já que disparo automático de WhatsApp em massa exige aprovação de conta empresarial (Meta ou Twilio) — combinamos deixar isso para uma próxima etapa.

Tudo isso roda em cima do **Supabase** (banco de dados + login) e do **Resend** (envio de e-mail). Os passos abaixo só você pode fazer, porque exigem criar contas e gerar chaves de acesso.

## 1. Criar o projeto no Supabase

1. Crie uma conta gratuita em https://supabase.com e um novo projeto.
2. No painel do projeto, vá em **SQL Editor** e cole o conteúdo do arquivo [`supabase/migrations/0001_init.sql`](./supabase/migrations/0001_init.sql). Rode o script — ele cria as tabelas `supporters`, `admins` e `broadcasts` já com as regras de segurança (RLS).
3. Vá em **Project Settings → API** e copie:
   - `Project URL`
   - `anon public` key

## 2. Configurar o frontend

1. Copie `.env.example` para `.env` na raiz do projeto.
2. Preencha com os valores copiados no passo anterior:
   ```
   VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-anon-key-aqui
   ```
3. Se for publicar o site (Vercel, Netlify etc.), configure essas duas variáveis também nas configurações de ambiente da hospedagem.

## 3. Criar o(s) usuário(s) administrador(es)

1. No painel do Supabase, vá em **Authentication → Users → Add user** e crie um usuário com e-mail e senha (esse será o login do admin).
2. Copie o `User UID` gerado.
3. No **SQL Editor**, rode (trocando pelos valores reais):
   ```sql
   insert into public.admins (user_id, email)
   values ('COLE-O-USER-UID-AQUI', 'email-do-admin@exemplo.com');
   ```
4. Repita para cada pessoa da equipe que precisar acessar o painel.

Só quem estiver na tabela `admins` consegue entrar em `/admin` — criar login no Supabase sem esse passo não dá acesso ao painel.

## 4. Configurar o envio de e-mail (Resend)

1. Crie uma conta gratuita em https://resend.com.
2. Verifique um domínio de envio (ou, para testar rapidamente, use o remetente de teste `onboarding@resend.dev` que já vem liberado).
3. Gere uma **API Key** em resend.com/api-keys.

## 5. Publicar a Edge Function que faz o disparo

A função que envia os e-mails (`supabase/functions/send-broadcast`) roda no próprio Supabase, para manter a chave do Resend em segredo (nunca no navegador). Você precisa do [Supabase CLI](https://supabase.com/docs/guides/cli) instalado:

```bash
npm install -g supabase

# login e link com o seu projeto (rode dentro da pasta do repositório)
supabase login
supabase link --project-ref SEU-PROJECT-REF

# configurar os segredos que a função usa
supabase secrets set RESEND_API_KEY=sua-api-key-do-resend
supabase secrets set BROADCAST_FROM_EMAIL="Carlos Mendes <onboarding@resend.dev>"

# publicar a função
supabase functions deploy send-broadcast
```

> `SEU-PROJECT-REF` fica em Project Settings → General → Reference ID.
> Depois de verificar seu próprio domínio no Resend, troque `BROADCAST_FROM_EMAIL` pelo remetente oficial da campanha (ex.: `campanha@carlosmendes.com.br`).

## 6. Testar

1. Rode `npm run dev` e cadastre um apoiador de teste pelo formulário do site.
2. Acesse `/admin/login`, entre com o usuário criado no passo 3.
3. No painel, confirme que o apoiador de teste aparece na lista.
4. Preencha "Enviar novidade" com um assunto/mensagem de teste e envie — confira se o e-mail chegou.

## Resumo de custos

- Supabase: plano gratuito cobre bem o volume de uma campanha local (banco, auth e Edge Functions).
- Resend: plano gratuito cobre até 3.000 e-mails/mês, 100/dia — normalmente suficiente para uma base de apoiadores; se crescer muito, dá para migrar de plano dentro do próprio Resend.
- WhatsApp em massa: não incluído nesta etapa (ver observação no início do documento).
