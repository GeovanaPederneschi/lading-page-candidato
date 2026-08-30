const candidatoAvatarInnerSvg = `
  <ellipse cx="150" cy="414" rx="88" ry="10" fill="rgba(0,0,0,0.3)" />
  <path d="M 0 420 L 50 258 Q 150 295 250 258 L 300 420 Z" fill="#1a1a1a" />
  <polygon points="136,261 150,322 164,261" fill="#f5f5f5" />
  <polygon points="145,261 150,320 155,261 152,249 148,249" fill="#1a237e" />
  <polygon points="148,249 152,249 153,258 147,258" fill="#14196e" />
  <path d="M 50,258 L 0,420 L 112,420 L 138,264 Z" fill="#2d2d2d" />
  <path d="M 250,258 L 300,420 L 188,420 L 162,264 Z" fill="#2d2d2d" />
  <path d="M 122,252 Q 136,242 140,262 L 128,264 Q 116,256 122,252 Z" fill="#f0f0f0" />
  <path d="M 178,252 Q 164,242 160,262 L 172,264 Q 184,256 178,252 Z" fill="#f0f0f0" />
  <path d="M 68 292 L 94 287 L 97 310 L 71 314 Z" fill="#ebebeb" opacity="0.92" />
  <path d="M 50 258 Q 150 282 250 258 L 248 248 Q 150 272 52 248 Z" fill="#2d2d2d" />
  <rect x="134" y="224" width="32" height="40" rx="8" fill="#C4956A" />
  <ellipse cx="150" cy="148" rx="78" ry="82" fill="#C4956A" />
  <path d="M 72 144 Q 72 57 150 54 Q 228 57 228 144 Q 224 80 150 76 Q 76 80 72 144 Z" fill="#1e140e" />
  <path d="M 72 144 L 74 98 Q 80 70 96 63 L 97 148 Z" fill="#1e140e" />
  <path d="M 228 144 L 226 98 Q 220 70 204 63 L 203 148 Z" fill="#1e140e" />
  <ellipse cx="150" cy="155" rx="66" ry="70" fill="#D4A574" />
  <ellipse cx="84" cy="152" rx="10" ry="16" fill="#C4956A" />
  <ellipse cx="216" cy="152" rx="10" ry="16" fill="#C4956A" />
  <ellipse cx="84" cy="152" rx="6" ry="10" fill="#B08050" opacity="0.45" />
  <ellipse cx="216" cy="152" rx="6" ry="10" fill="#B08050" opacity="0.45" />
  <ellipse cx="150" cy="104" rx="52" ry="18" fill="rgba(0,0,0,0.05)" />
  <path d="M 106 131 Q 120 124 136 129" stroke="#2d1810" stroke-width="4.5" fill="none" stroke-linecap="round" />
  <path d="M 164 129 Q 180 124 194 131" stroke="#2d1810" stroke-width="4.5" fill="none" stroke-linecap="round" />
  <ellipse cx="120" cy="143" rx="20" ry="13" fill="rgba(80,40,10,0.1)" />
  <ellipse cx="180" cy="143" rx="20" ry="13" fill="rgba(80,40,10,0.1)" />
  <ellipse cx="120" cy="144" rx="14" ry="9.5" fill="white" />
  <ellipse cx="180" cy="144" rx="14" ry="9.5" fill="white" />
  <circle cx="120" cy="145" r="7" fill="#3d2510" />
  <circle cx="180" cy="145" r="7" fill="#3d2510" />
  <circle cx="120" cy="145" r="3.5" fill="#050200" />
  <circle cx="180" cy="145" r="3.5" fill="#050200" />
  <circle cx="122.5" cy="142.5" r="2.2" fill="white" />
  <circle cx="182.5" cy="142.5" r="2.2" fill="white" />
  <path d="M 106 144 Q 120 135 134 144" stroke="#8B5030" stroke-width="2" fill="none" />
  <path d="M 166 144 Q 180 135 194 144" stroke="#8B5030" stroke-width="2" fill="none" />
  <path d="M 148 132 L 145 170 Q 145 178 150 179 Q 155 178 155 170 L 152 132" stroke="#b08050" stroke-width="1.5" fill="rgba(160,100,60,0.1)" stroke-linejoin="round" />
  <ellipse cx="144" cy="175" rx="7" ry="5" fill="rgba(140,90,50,0.22)" />
  <ellipse cx="156" cy="175" rx="7" ry="5" fill="rgba(140,90,50,0.22)" />
  <path d="M 128 191 Q 138 187 150 190 Q 162 187 172 191" stroke="#9a4830" stroke-width="1.8" fill="none" />
  <path d="M 128 191 Q 150 205 172 191" stroke="#8a3820" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <ellipse cx="100" cy="168" rx="18" ry="12" fill="rgba(210,130,90,0.13)" />
  <ellipse cx="200" cy="168" rx="18" ry="12" fill="rgba(210,130,90,0.13)" />
  <circle cx="126" cy="192" r="2.2" fill="rgba(0,0,0,0.1)" />
  <circle cx="174" cy="192" r="2.2" fill="rgba(0,0,0,0.1)" />
  <ellipse cx="150" cy="213" rx="38" ry="16" fill="#C8905E" />
  <path d="M 84 138 Q 84 185 102 218 Q 88 195 84 165 Z" fill="rgba(0,0,0,0.07)" />
  <path d="M 216 138 Q 216 185 198 218 Q 212 195 216 165 Z" fill="rgba(0,0,0,0.07)" />
`.trim()

/** Full standalone SVG markup (grayscale baked in), for rasterizing onto a <canvas>. */
export const candidatoAvatarSvgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420" style="filter:grayscale(1) contrast(1.05)">${candidatoAvatarInnerSvg}</svg>`

export const candidatoAvatarDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(candidatoAvatarSvgMarkup)}`

export default function CandidatoAvatar({ className = 'w-full h-full', grayscale = true }) {
  return (
    <svg
      viewBox="0 0 300 420"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={grayscale ? { filter: 'grayscale(1) contrast(1.05)' } : undefined}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: candidatoAvatarInnerSvg }}
    />
  )
}
