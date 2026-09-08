import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Helper to create an SVG plant illustration
const plantSvgs = {
  'monstera.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2E7D32"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#43A047"/>
          <stop offset="100%" stop-color="#2E7D32"/>
        </linearGradient>
        <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D87A56"/>
          <stop offset="50%" stop-color="#E08E6D"/>
          <stop offset="100%" stop-color="#BF613B"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#bg)"/>
      <ellipse cx="200" cy="360" rx="90" ry="14" fill="#000000" opacity="0.1"/>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,350 155,350" fill="url(#potGrad)"/>
        <ellipse cx="200" cy="250" rx="60" ry="12" fill="#B25330"/>
        <ellipse cx="200" cy="250" rx="54" ry="9" fill="#5D4037"/>
        <!-- Pot pattern/rim -->
        <rect x="135" y="240" width="130" height="15" rx="6" fill="#E08E6D"/>
      </g>
      <!-- Stems -->
      <path d="M200 250 Q190 180 140 130" stroke="#2E7D32" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M200 250 Q200 160 200 80" stroke="#2E7D32" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M200 250 Q215 180 265 140" stroke="#2E7D32" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M200 250 Q160 200 120 200" stroke="#388E3C" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M200 250 Q235 210 280 210" stroke="#388E3C" stroke-width="7" stroke-linecap="round" fill="none"/>
      <!-- Monstera Leaves -->
      <!-- Center Leaf -->
      <g filter="url(#shadow)" transform="translate(200, 80) rotate(-5)">
        <path d="M0,0 C-60,-40 -70,-110 0,-150 C70,-110 60,-40 0,0 Z" fill="url(#leafGrad1)"/>
        <path d="M0,0 L0,-140" stroke="#81C784" stroke-width="3" stroke-linecap="round"/>
        <!-- Fenestrations/splits -->
        <ellipse cx="-25" cy="-70" rx="8" ry="18" fill="url(#bg)" transform="rotate(-30 -25 -70)"/>
        <ellipse cx="25" cy="-70" rx="8" ry="18" fill="url(#bg)" transform="rotate(30 25 -70)"/>
        <ellipse cx="-20" cy="-110" rx="6" ry="14" fill="url(#bg)" transform="rotate(-40 -20 -110)"/>
        <ellipse cx="20" cy="-110" rx="6" ry="14" fill="url(#bg)" transform="rotate(40 20 -110)"/>
      </g>
      <!-- Left Leaf -->
      <g filter="url(#shadow)" transform="translate(140, 130) rotate(-45)">
        <path d="M0,0 C-50,-30 -55,-90 0,-120 C55,-90 50,-30 0,0 Z" fill="url(#leafGrad2)"/>
        <path d="M0,0 L0,-110" stroke="#A5D6A7" stroke-width="2.5"/>
        <ellipse cx="-18" cy="-55" rx="6" ry="14" fill="url(#bg)" transform="rotate(-30 -18 -55)"/>
        <ellipse cx="18" cy="-55" rx="6" ry="14" fill="url(#bg)" transform="rotate(30 18 -55)"/>
      </g>
      <!-- Right Leaf -->
      <g filter="url(#shadow)" transform="translate(265, 140) rotate(40)">
        <path d="M0,0 C-50,-30 -55,-90 0,-120 C55,-90 50,-30 0,0 Z" fill="url(#leafGrad1)"/>
        <path d="M0,0 L0,-110" stroke="#A5D6A7" stroke-width="2.5"/>
        <ellipse cx="-18" cy="-55" rx="6" ry="14" fill="url(#bg)" transform="rotate(-30 -18 -55)"/>
        <ellipse cx="18" cy="-55" rx="6" ry="14" fill="url(#bg)" transform="rotate(30 18 -55)"/>
      </g>
      <!-- Bottom Left Leaf -->
      <g filter="url(#shadow)" transform="translate(120, 200) rotate(-70)">
        <path d="M0,0 C-40,-25 -45,-70 0,-95 C45,-70 40,-25 0,0 Z" fill="url(#leafGrad2)"/>
        <ellipse cx="-14" cy="-45" rx="5" ry="10" fill="url(#bg)" transform="rotate(-30 -14 -45)"/>
      </g>
      <!-- Bottom Right Leaf -->
      <g filter="url(#shadow)" transform="translate(280, 210) rotate(70)">
        <path d="M0,0 C-40,-25 -45,-70 0,-95 C45,-70 40,-25 0,0 Z" fill="url(#leafGrad2)"/>
        <ellipse cx="14" cy="-45" rx="5" ry="10" fill="url(#bg)" transform="rotate(30 14 -45)"/>
      </g>
    </svg>
  `,

  'snake-plant.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="spBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F8E9"/>
          <stop offset="100%" stop-color="#DCEDC8"/>
        </linearGradient>
        <linearGradient id="spPot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#37474F"/>
          <stop offset="50%" stop-color="#455A64"/>
          <stop offset="100%" stop-color="#263238"/>
        </linearGradient>
        <linearGradient id="snakeBlade1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FBC02D"/>
          <stop offset="15%" stop-color="#2E7D32"/>
          <stop offset="50%" stop-color="#1B5E20"/>
          <stop offset="85%" stop-color="#2E7D32"/>
          <stop offset="100%" stop-color="#FBC02D"/>
        </linearGradient>
        <linearGradient id="snakeBlade2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FFF176"/>
          <stop offset="15%" stop-color="#43A047"/>
          <stop offset="50%" stop-color="#2E7D32"/>
          <stop offset="85%" stop-color="#43A047"/>
          <stop offset="100%" stop-color="#FFF176"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#spBg)"/>
      <ellipse cx="200" cy="365" rx="85" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Snake Plant Tall Spears -->
      <!-- Back leaves -->
      <path d="M175,270 Q160,150 170,50 Q195,150 185,270 Z" fill="url(#snakeBlade1)"/>
      <path d="M215,270 Q240,140 225,45 Q210,140 220,270 Z" fill="url(#snakeBlade2)"/>
      <!-- Mid leaves -->
      <path d="M190,270 Q195,120 200,35 Q205,120 210,270 Z" fill="url(#snakeBlade1)"/>
      <path d="M150,270 Q130,180 140,90 Q170,180 160,270 Z" fill="url(#snakeBlade2)"/>
      <path d="M235,270 Q270,180 255,85 Q230,180 240,270 Z" fill="url(#snakeBlade1)"/>
      <!-- Front side leaves -->
      <path d="M135,270 Q110,210 120,130 Q150,210 145,270 Z" fill="url(#snakeBlade1)"/>
      <path d="M255,270 Q285,210 275,125 Q250,210 260,270 Z" fill="url(#snakeBlade2)"/>
      <!-- Ceramic Pot with modern stand -->
      <g filter="url(#shadow)">
        <!-- Stand Legs -->
        <rect x="135" y="300" width="8" height="60" rx="4" fill="#8D6E63"/>
        <rect x="257" y="300" width="8" height="60" rx="4" fill="#8D6E63"/>
        <rect x="135" y="335" width="130" height="8" rx="4" fill="#6D4C41"/>
        <!-- Pot -->
        <polygon points="145,260 255,260 245,335 155,335" fill="url(#spPot)"/>
        <ellipse cx="200" cy="260" rx="55" ry="10" fill="#607D8B"/>
        <ellipse cx="200" cy="260" rx="48" ry="7" fill="#3E2723"/>
      </g>
    </svg>
  `,

  'peace-lily.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="plBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2F1"/>
          <stop offset="100%" stop-color="#B2DFDB"/>
        </linearGradient>
        <linearGradient id="plPot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ECEFF1"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#CFD8DC"/>
        </linearGradient>
        <linearGradient id="plLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1B5E20"/>
          <stop offset="100%" stop-color="#0B3C11"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#plBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Arching Leaves -->
      <path d="M200,260 Q120,220 90,150 Q130,130 200,260 Z" fill="url(#plLeaf)"/>
      <path d="M200,260 Q280,220 310,150 Q270,130 200,260 Z" fill="url(#plLeaf)"/>
      <path d="M200,260 Q150,180 130,100 Q180,120 200,260 Z" fill="url(#plLeaf)"/>
      <path d="M200,260 Q250,180 270,100 Q220,120 200,260 Z" fill="url(#plLeaf)"/>
      <path d="M200,260 Q190,160 170,70 Q210,90 200,260 Z" fill="url(#plLeaf)"/>
      <!-- Flower Stems & White Spathes -->
      <path d="M200,260 Q195,140 215,60" stroke="#4CAF50" stroke-width="4" fill="none"/>
      <!-- White Bloom 1 -->
      <g filter="url(#shadow)" transform="translate(215, 60)">
        <path d="M0,20 C-25,-10 -20,-50 0,-70 C20,-50 25,-10 0,20 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1.5"/>
        <path d="M0,15 L0,-45" stroke="#FFF9C4" stroke-width="6" stroke-linecap="round"/>
        <circle cx="0" cy="-45" r="3" fill="#FDD835"/>
      </g>
      <!-- Flower Stem 2 -->
      <path d="M200,260 Q160,160 145,100" stroke="#4CAF50" stroke-width="3.5" fill="none"/>
      <!-- White Bloom 2 -->
      <g filter="url(#shadow)" transform="translate(145, 100) rotate(-20)">
        <path d="M0,15 C-20,-5 -15,-40 0,-55 C15,-40 20,-5 0,15 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1.5"/>
        <path d="M0,10 L0,-35" stroke="#FFF9C4" stroke-width="5" stroke-linecap="round"/>
      </g>
      <!-- Ceramic Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="url(#plPot)"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#ECEFF1"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#4E342E"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#CFD8DC"/>
      </g>
    </svg>
  `,

  'fiddle-leaf.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="flBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F3E5F5"/>
          <stop offset="100%" stop-color="#E8EAF6"/>
        </linearGradient>
        <linearGradient id="flLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#33691E"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
        <linearGradient id="flPot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#A1887F"/>
          <stop offset="50%" stop-color="#BCAAA4"/>
          <stop offset="100%" stop-color="#8D6E63"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#flBg)"/>
      <ellipse cx="200" cy="365" rx="85" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Woody Stem -->
      <path d="M200,260 Q195,160 200,60" stroke="#5D4037" stroke-width="12" stroke-linecap="round"/>
      <!-- Fiddle Leaves (Violin Shaped) -->
      <!-- Leaf 1 (Top) -->
      <g filter="url(#shadow)" transform="translate(200, 60)">
        <path d="M0,0 C-35,-20 -50,-60 -25,-90 C-10,-105 10,-105 25,-90 C50,-60 35,-20 0,0 Z" fill="url(#flLeaf)"/>
        <path d="M0,0 L0,-85" stroke="#7CB342" stroke-width="3"/>
      </g>
      <!-- Leaf 2 (Left High) -->
      <g filter="url(#shadow)" transform="translate(195, 110) rotate(-45)">
        <path d="M0,0 C-40,-20 -55,-60 -30,-90 C-10,-105 10,-105 30,-90 C55,-60 40,-20 0,0 Z" fill="url(#flLeaf)"/>
        <path d="M0,0 L0,-85" stroke="#7CB342" stroke-width="3"/>
      </g>
      <!-- Leaf 3 (Right High) -->
      <g filter="url(#shadow)" transform="translate(200, 130) rotate(45)">
        <path d="M0,0 C-40,-20 -55,-60 -30,-90 C-10,-105 10,-105 30,-90 C55,-60 40,-20 0,0 Z" fill="url(#flLeaf)"/>
        <path d="M0,0 L0,-85" stroke="#7CB342" stroke-width="3"/>
      </g>
      <!-- Leaf 4 (Left Low) -->
      <g filter="url(#shadow)" transform="translate(198, 180) rotate(-65)">
        <path d="M0,0 C-45,-25 -60,-65 -35,-100 C-10,-115 10,-115 35,-100 C60,-65 45,-25 0,0 Z" fill="url(#flLeaf)"/>
        <path d="M0,0 L0,-95" stroke="#7CB342" stroke-width="3"/>
      </g>
      <!-- Leaf 5 (Right Low) -->
      <g filter="url(#shadow)" transform="translate(202, 200) rotate(60)">
        <path d="M0,0 C-45,-25 -60,-65 -35,-100 C-10,-115 10,-115 35,-100 C60,-65 45,-25 0,0 Z" fill="url(#flLeaf)"/>
        <path d="M0,0 L0,-95" stroke="#7CB342" stroke-width="3"/>
      </g>
      <!-- Woven Basket Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="url(#flPot)"/>
        <ellipse cx="200" cy="250" rx="60" ry="12" fill="#D7CCC8"/>
        <ellipse cx="200" cy="250" rx="52" ry="8" fill="#3E2723"/>
        <!-- Basket weaves lines -->
        <line x1="145" y1="280" x2="255" y2="280" stroke="#795548" stroke-width="3" stroke-dasharray="8,6"/>
        <line x1="150" y1="310" x2="250" y2="310" stroke="#795548" stroke-width="3" stroke-dasharray="8,6"/>
      </g>
    </svg>
  `,

  'zz-plant.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="zzBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F8F5"/>
          <stop offset="100%" stop-color="#D1F2EB"/>
        </linearGradient>
        <linearGradient id="zzLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00695C"/>
          <stop offset="100%" stop-color="#004D40"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#zzBg)"/>
      <ellipse cx="200" cy="365" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Stems with feather leaflets -->
      <!-- Stem 1 Left -->
      <path d="M200,260 Q170,160 140,80" stroke="#00796B" stroke-width="6" fill="none"/>
      <!-- Stem 2 Center -->
      <path d="M200,260 Q200,150 200,50" stroke="#00796B" stroke-width="7" fill="none"/>
      <!-- Stem 3 Right -->
      <path d="M200,260 Q230,160 260,80" stroke="#00796B" stroke-width="6" fill="none"/>
      <!-- Leaflets -->
      <!-- Center Stem Leaflets -->
      <ellipse cx="180" cy="80" rx="16" ry="10" transform="rotate(-30 180 80)" fill="url(#zzLeaf)"/>
      <ellipse cx="220" cy="90" rx="16" ry="10" transform="rotate(30 220 90)" fill="url(#zzLeaf)"/>
      <ellipse cx="178" cy="120" rx="18" ry="11" transform="rotate(-35 178 120)" fill="url(#zzLeaf)"/>
      <ellipse cx="222" cy="130" rx="18" ry="11" transform="rotate(35 222 130)" fill="url(#zzLeaf)"/>
      <ellipse cx="176" cy="165" rx="20" ry="12" transform="rotate(-40 176 165)" fill="url(#zzLeaf)"/>
      <ellipse cx="224" cy="175" rx="20" ry="12" transform="rotate(40 224 175)" fill="url(#zzLeaf)"/>
      <ellipse cx="200" cy="50" rx="15" ry="10" transform="rotate(-90 200 50)" fill="url(#zzLeaf)"/>
      <!-- Left Stem Leaflets -->
      <ellipse cx="140" cy="80" rx="14" ry="9" transform="rotate(-60 140 80)" fill="url(#zzLeaf)"/>
      <ellipse cx="130" cy="115" rx="16" ry="10" transform="rotate(-60 130 115)" fill="url(#zzLeaf)"/>
      <ellipse cx="165" cy="125" rx="16" ry="10" transform="rotate(0 165 125)" fill="url(#zzLeaf)"/>
      <ellipse cx="145" cy="155" rx="17" ry="10" transform="rotate(-60 145 155)" fill="url(#zzLeaf)"/>
      <ellipse cx="180" cy="165" rx="17" ry="10" transform="rotate(0 180 165)" fill="url(#zzLeaf)"/>
      <!-- Right Stem Leaflets -->
      <ellipse cx="260" cy="80" rx="14" ry="9" transform="rotate(60 260 80)" fill="url(#zzLeaf)"/>
      <ellipse cx="270" cy="115" rx="16" ry="10" transform="rotate(60 270 115)" fill="url(#zzLeaf)"/>
      <ellipse cx="235" cy="125" rx="16" ry="10" transform="rotate(0 235 125)" fill="url(#zzLeaf)"/>
      <ellipse cx="255" cy="155" rx="17" ry="10" transform="rotate(60 255 155)" fill="url(#zzLeaf)"/>
      <ellipse cx="220" cy="165" rx="17" ry="10" transform="rotate(0 220 165)" fill="url(#zzLeaf)"/>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="145,250 255,250 240,345 160,345" fill="#263238"/>
        <ellipse cx="200" cy="250" rx="55" ry="10" fill="#37474F"/>
        <ellipse cx="200" cy="250" rx="48" ry="7" fill="#1C2833"/>
        <line x1="170" y1="290" x2="230" y2="290" stroke="#FFB74D" stroke-width="3"/>
      </g>
    </svg>
  `,

  'chinese-evergreen.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="ceBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCE4EC"/>
          <stop offset="100%" stop-color="#F8BBD0"/>
        </linearGradient>
        <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F06292"/>
          <stop offset="50%" stop-color="#2E7D32"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#ceBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Chinese Evergreen Variegated Leaves -->
      <!-- Center Leaf -->
      <g filter="url(#shadow)" transform="translate(200, 70)">
        <path d="M0,0 C-30,-20 -35,-80 0,-110 C35,-80 30,-20 0,0 Z" fill="#2E7D32"/>
        <path d="M0,0 C-15,-20 -20,-75 0,-100 C20,-75 15,-20 0,0 Z" fill="#F48FB1"/>
        <path d="M0,0 L0,-95" stroke="#EC407A" stroke-width="2.5"/>
      </g>
      <!-- Left Leaf -->
      <g filter="url(#shadow)" transform="translate(150, 110) rotate(-35)">
        <path d="M0,0 C-30,-20 -35,-80 0,-110 C35,-80 30,-20 0,0 Z" fill="#2E7D32"/>
        <path d="M0,0 C-15,-20 -20,-75 0,-100 C20,-75 15,-20 0,0 Z" fill="#F48FB1"/>
        <path d="M0,0 L0,-95" stroke="#EC407A" stroke-width="2.5"/>
      </g>
      <!-- Right Leaf -->
      <g filter="url(#shadow)" transform="translate(250, 110) rotate(35)">
        <path d="M0,0 C-30,-20 -35,-80 0,-110 C35,-80 30,-20 0,0 Z" fill="#2E7D32"/>
        <path d="M0,0 C-15,-20 -20,-75 0,-100 C20,-75 15,-20 0,0 Z" fill="#F48FB1"/>
        <path d="M0,0 L0,-95" stroke="#EC407A" stroke-width="2.5"/>
      </g>
      <!-- Wide Left Leaf -->
      <g filter="url(#shadow)" transform="translate(120, 170) rotate(-65)">
        <path d="M0,0 C-25,-15 -30,-70 0,-95 C30,-70 25,-15 0,0 Z" fill="#2E7D32"/>
        <path d="M0,0 C-12,-15 -15,-65 0,-85 C15,-65 12,-15 0,0 Z" fill="#F48FB1"/>
      </g>
      <!-- Wide Right Leaf -->
      <g filter="url(#shadow)" transform="translate(280, 170) rotate(65)">
        <path d="M0,0 C-25,-15 -30,-70 0,-95 C30,-70 25,-15 0,0 Z" fill="#2E7D32"/>
        <path d="M0,0 C-12,-15 -15,-65 0,-85 C15,-65 12,-15 0,0 Z" fill="#F48FB1"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#E8EAF6"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#FFFFFF"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#4E342E"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#C5CAE9"/>
      </g>
    </svg>
  `,

  'aloe-vera.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="alBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <linearGradient id="aloeLeaf" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#66BB6A"/>
          <stop offset="50%" stop-color="#43A047"/>
          <stop offset="100%" stop-color="#2E7D32"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#alBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Aloe Blades with Spikes -->
      <g filter="url(#shadow)">
        <!-- Center Spike -->
        <path d="M190,260 Q195,130 200,60 Q205,130 210,260 Z" fill="url(#aloeLeaf)"/>
        <!-- Left Spikes -->
        <path d="M180,260 Q145,160 120,90 Q170,165 190,260 Z" fill="url(#aloeLeaf)"/>
        <path d="M170,260 Q115,190 70,150 Q145,210 180,260 Z" fill="url(#aloeLeaf)"/>
        <path d="M165,260 Q90,230 40,210 Q120,240 170,260 Z" fill="url(#aloeLeaf)"/>
        <!-- Right Spikes -->
        <path d="M220,260 Q255,160 280,90 Q230,165 210,260 Z" fill="url(#aloeLeaf)"/>
        <path d="M230,260 Q285,190 330,150 Q255,210 220,260 Z" fill="url(#aloeLeaf)"/>
        <path d="M235,260 Q310,230 360,210 Q280,240 230,260 Z" fill="url(#aloeLeaf)"/>
      </g>
      <!-- Terracotta Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,255 260,255 245,345 155,345" fill="#D87A56"/>
        <ellipse cx="200" cy="255" rx="60" ry="12" fill="#BF613B"/>
        <ellipse cx="200" cy="255" rx="52" ry="8" fill="#5D4037"/>
        <rect x="135" y="247" width="130" height="14" rx="5" fill="#E08E6D"/>
      </g>
    </svg>
  `,

  'echeveria.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="echBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F7FA"/>
          <stop offset="100%" stop-color="#B2EBF2"/>
        </linearGradient>
        <linearGradient id="echLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F48FB1"/>
          <stop offset="30%" stop-color="#80CBC4"/>
          <stop offset="100%" stop-color="#00897B"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#echBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Symmetrical Rosette -->
      <g filter="url(#shadow)" transform="translate(200, 190)">
        <!-- Outer ring -->
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(0)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(45)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(90)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(135)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(180)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(225)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(270)" fill="url(#echLeaf)"/>
        <path d="M0,0 C-30,-20 -35,-80 0,-100 C35,-80 30,-20 0,0 Z" transform="rotate(315)" fill="url(#echLeaf)"/>
        <!-- Inner ring -->
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(22.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(67.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(112.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(157.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(202.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(247.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(292.5)" fill="#80CBC4"/>
        <path d="M0,0 C-20,-15 -25,-55 0,-70 C25,-55 20,-15 0,0 Z" transform="rotate(337.5)" fill="#80CBC4"/>
        <!-- Center Core -->
        <circle cx="0" cy="0" r="15" fill="#F48FB1"/>
      </g>
      <!-- Modern Shallow Ceramic Bowl Pot -->
      <g filter="url(#shadow)">
        <polygon points="130,265 270,265 250,345 150,345" fill="#ECEFF1"/>
        <ellipse cx="200" cy="265" rx="70" ry="14" fill="#CFD8DC"/>
        <ellipse cx="200" cy="265" rx="62" ry="10" fill="#455A64"/>
      </g>
    </svg>
  `,

  'jade-plant.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="jdBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF8E1"/>
          <stop offset="100%" stop-color="#FFECB3"/>
        </linearGradient>
        <linearGradient id="jadeLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#81C784"/>
          <stop offset="50%" stop-color="#388E3C"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#jdBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Thick Bonsai Trunk & Branches -->
      <path d="M200,260 Q195,190 170,140 Q150,110 130,90" stroke="#6D4C41" stroke-width="14" stroke-linecap="round" fill="none"/>
      <path d="M170,140 Q210,120 250,80" stroke="#6D4C41" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M190,190 Q230,170 270,150" stroke="#6D4C41" stroke-width="10" stroke-linecap="round" fill="none"/>
      <!-- Plump Oval Jade Leaves -->
      <ellipse cx="120" cy="80" rx="18" ry="12" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="140" cy="95" rx="18" ry="12" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="160" cy="75" rx="16" ry="11" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="250" cy="70" rx="19" ry="13" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="270" cy="90" rx="18" ry="12" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="235" cy="90" rx="16" ry="11" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="275" cy="140" rx="18" ry="12" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="290" cy="160" rx="16" ry="11" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <ellipse cx="150" cy="150" rx="18" ry="12" fill="url(#jadeLeaf)" stroke="#D32F2F" stroke-width="1"/>
      <!-- Ceramic Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#3E2723"/>
        <ellipse cx="200" cy="250" rx="60" ry="12" fill="#4E342E"/>
        <ellipse cx="200" cy="250" rx="52" ry="8" fill="#271915"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#5D4037"/>
      </g>
    </svg>
  `,

  'haworthia.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="hwBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1F8E9"/>
          <stop offset="100%" stop-color="#DCEDC8"/>
        </linearGradient>
        <linearGradient id="hawLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#A5D6A7"/>
          <stop offset="60%" stop-color="#388E3C"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#hwBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Translucent windowed Haworthia blades -->
      <g filter="url(#shadow)">
        <polygon points="190,260 195,110 205,110 210,260" fill="url(#hawLeaf)"/>
        <polygon points="180,260 155,130 170,120 195,260" fill="url(#hawLeaf)"/>
        <polygon points="220,260 245,130 230,120 205,260" fill="url(#hawLeaf)"/>
        <polygon points="170,260 120,160 135,150 185,260" fill="url(#hawLeaf)"/>
        <polygon points="230,260 280,160 265,150 215,260" fill="url(#hawLeaf)"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="145,255 255,255 240,345 160,345" fill="#78909C"/>
        <ellipse cx="200" cy="255" rx="55" ry="11" fill="#90A4AE"/>
        <ellipse cx="200" cy="255" rx="48" ry="7" fill="#37474F"/>
      </g>
    </svg>
  `,

  'zebra-haworthia.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="zhBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8EAF6"/>
          <stop offset="100%" stop-color="#C5CAE9"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#zhBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Zebra Spikes with White Ridges -->
      <g filter="url(#shadow)">
        <!-- Center Blade -->
        <path d="M190,260 Q195,130 200,80 Q205,130 210,260 Z" fill="#1B5E20"/>
        <!-- Zebra stripes -->
        <line x1="193" y1="120" x2="207" y2="120" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="192" y1="150" x2="208" y2="150" stroke="#FFFFFF" stroke-width="3.5"/>
        <line x1="191" y1="180" x2="209" y2="180" stroke="#FFFFFF" stroke-width="4"/>
        <line x1="190" y1="210" x2="210" y2="210" stroke="#FFFFFF" stroke-width="4"/>
        <!-- Left Blade 1 -->
        <path d="M180,260 Q145,150 135,110 Q170,170 190,260 Z" fill="#1B5E20"/>
        <line x1="142" y1="140" x2="160" y2="155" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="150" y1="170" x2="173" y2="185" stroke="#FFFFFF" stroke-width="3.5"/>
        <line x1="160" y1="200" x2="185" y2="215" stroke="#FFFFFF" stroke-width="4"/>
        <!-- Right Blade 1 -->
        <path d="M220,260 Q255,150 265,110 Q230,170 210,260 Z" fill="#1B5E20"/>
        <line x1="258" y1="140" x2="240" y2="155" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="250" y1="170" x2="227" y2="185" stroke="#FFFFFF" stroke-width="3.5"/>
        <line x1="240" y1="200" x2="215" y2="215" stroke="#FFFFFF" stroke-width="4"/>
      </g>
      <!-- White Ceramic Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#FFFFFF"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#ECEFF1"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#37474F"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#CFD8DC"/>
      </g>
    </svg>
  `,

  'string-of-pearls.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="sopBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <linearGradient id="pearlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#81C784"/>
          <stop offset="100%" stop-color="#2E7D32"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#sopBg)"/>
      <!-- Hanging String Lines -->
      <line x1="200" y1="20" x2="140" y2="140" stroke="#795548" stroke-width="2.5"/>
      <line x1="200" y1="20" x2="260" y2="140" stroke="#795548" stroke-width="2.5"/>
      <line x1="200" y1="20" x2="200" y2="140" stroke="#795548" stroke-width="2.5"/>
      <circle cx="200" cy="20" r="6" fill="#5D4037"/>
      <!-- Hanging Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,140 260,140 240,210 160,210" fill="#D7CCC8"/>
        <ellipse cx="200" cy="140" rx="60" ry="10" fill="#EFEBE9"/>
        <ellipse cx="200" cy="140" rx="52" ry="7" fill="#4E342E"/>
      </g>
      <!-- Cascading Tendrils & Round Green Beads -->
      <!-- Vine 1 -->
      <path d="M160,160 Q130,220 150,330" stroke="#388E3C" stroke-width="2.5" fill="none"/>
      <circle cx="155" cy="180" r="7" fill="url(#pearlGrad)"/>
      <circle cx="145" cy="210" r="8" fill="url(#pearlGrad)"/>
      <circle cx="140" cy="245" r="8" fill="url(#pearlGrad)"/>
      <circle cx="143" cy="280" r="7" fill="url(#pearlGrad)"/>
      <circle cx="148" cy="315" r="6" fill="url(#pearlGrad)"/>
      <!-- Vine 2 Center Left -->
      <path d="M185,160 Q170,240 180,360" stroke="#388E3C" stroke-width="2.5" fill="none"/>
      <circle cx="180" cy="185" r="7" fill="url(#pearlGrad)"/>
      <circle cx="175" cy="220" r="8" fill="url(#pearlGrad)"/>
      <circle cx="172" cy="260" r="8" fill="url(#pearlGrad)"/>
      <circle cx="174" cy="300" r="7" fill="url(#pearlGrad)"/>
      <circle cx="178" cy="340" r="6" fill="url(#pearlGrad)"/>
      <!-- Vine 3 Center Right -->
      <path d="M215,160 Q230,240 215,350" stroke="#388E3C" stroke-width="2.5" fill="none"/>
      <circle cx="220" cy="185" r="7" fill="url(#pearlGrad)"/>
      <circle cx="226" cy="225" r="8" fill="url(#pearlGrad)"/>
      <circle cx="225" cy="265" r="8" fill="url(#pearlGrad)"/>
      <circle cx="220" cy="305" r="7" fill="url(#pearlGrad)"/>
      <circle cx="216" cy="335" r="6" fill="url(#pearlGrad)"/>
      <!-- Vine 4 Right -->
      <path d="M240,160 Q270,230 250,320" stroke="#388E3C" stroke-width="2.5" fill="none"/>
      <circle cx="248" cy="180" r="7" fill="url(#pearlGrad)"/>
      <circle cx="258" cy="215" r="8" fill="url(#pearlGrad)"/>
      <circle cx="260" cy="250" r="8" fill="url(#pearlGrad)"/>
      <circle cx="255" cy="285" r="7" fill="url(#pearlGrad)"/>
      <circle cx="250" cy="310" r="6" fill="url(#pearlGrad)"/>
    </svg>
  `,

  'spider-plant.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="spdBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#spdBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Arching Variegated Blades -->
      <!-- Left side arches -->
      <path d="M200,260 Q120,200 60,180 Q130,220 200,260 Z" fill="#4CAF50"/>
      <path d="M200,260 Q130,170 40,130 Q140,200 200,260 Z" fill="#81C784"/>
      <path d="M200,260 Q150,130 70,80 Q160,170 200,260 Z" fill="#2E7D32"/>
      <!-- Right side arches -->
      <path d="M200,260 Q280,200 340,180 Q270,220 200,260 Z" fill="#4CAF50"/>
      <path d="M200,260 Q270,170 360,130 Q260,200 200,260 Z" fill="#81C784"/>
      <path d="M200,260 Q250,130 330,80 Q240,170 200,260 Z" fill="#2E7D32"/>
      <!-- Upright arches -->
      <path d="M200,260 Q180,100 150,50 Q190,120 200,260 Z" fill="#66BB6A"/>
      <path d="M200,260 Q220,100 250,50 Q210,120 200,260 Z" fill="#66BB6A"/>
      <!-- Hanging baby plantlet stolon -->
      <path d="M200,250 Q280,260 320,320" stroke="#81C784" stroke-width="2.5" fill="none"/>
      <!-- Mini Spider Plantlet -->
      <g transform="translate(320, 320)">
        <path d="M0,0 Q-15,-10 -25,-5" stroke="#2E7D32" stroke-width="2" fill="none"/>
        <path d="M0,0 Q15,-10 25,-5" stroke="#2E7D32" stroke-width="2" fill="none"/>
        <path d="M0,0 Q0,15 5,20" stroke="#4CAF50" stroke-width="2" fill="none"/>
        <circle cx="0" cy="0" r="3" fill="#FFF59D"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#FFE082"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#FFF9C4"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#5D4037"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#FFD54F"/>
      </g>
    </svg>
  `,

  'boston-fern.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="bfBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#bfBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Feathery Fronds -->
      <g stroke="#2E7D32" stroke-linecap="round">
        <!-- Main stems -->
        <path d="M200,260 Q140,160 80,100" stroke-width="4" fill="none"/>
        <path d="M200,260 Q260,160 320,100" stroke-width="4" fill="none"/>
        <path d="M200,260 Q170,140 140,60" stroke-width="4" fill="none"/>
        <path d="M200,260 Q230,140 260,60" stroke-width="4" fill="none"/>
        <path d="M200,260 Q110,210 50,180" stroke-width="4" fill="none"/>
        <path d="M200,260 Q290,210 350,180" stroke-width="4" fill="none"/>
      </g>
      <!-- Leaflet clusters -->
      <g fill="#43A047" opacity="0.9">
        <ellipse cx="90" cy="110" rx="14" ry="6" transform="rotate(-30 90 110)"/>
        <ellipse cx="120" cy="140" rx="18" ry="7" transform="rotate(-30 120 140)"/>
        <ellipse cx="150" cy="175" rx="20" ry="8" transform="rotate(-30 150 175)"/>
        <ellipse cx="310" cy="110" rx="14" ry="6" transform="rotate(30 310 110)"/>
        <ellipse cx="280" cy="140" rx="18" ry="7" transform="rotate(30 280 140)"/>
        <ellipse cx="250" cy="175" rx="20" ry="8" transform="rotate(30 250 175)"/>
        <ellipse cx="150" cy="70" rx="14" ry="6" transform="rotate(-60 150 70)"/>
        <ellipse cx="170" cy="110" rx="18" ry="7" transform="rotate(-60 170 110)"/>
        <ellipse cx="250" cy="70" rx="14" ry="6" transform="rotate(60 250 70)"/>
        <ellipse cx="230" cy="110" rx="18" ry="7" transform="rotate(60 230 110)"/>
        <ellipse cx="65" cy="190" rx="16" ry="7" transform="rotate(0 65 190)"/>
        <ellipse cx="335" cy="190" rx="16" ry="7" transform="rotate(0 335 190)"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#8D6E63"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#A1887F"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#4E342E"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#BCAAA4"/>
      </g>
    </svg>
  `,

  'rubber-plant.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="rpBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ECEFF1"/>
          <stop offset="100%" stop-color="#CFD8DC"/>
        </linearGradient>
        <linearGradient id="burgundyLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3E2723"/>
          <stop offset="50%" stop-color="#1B5E20"/>
          <stop offset="100%" stop-color="#0E2E10"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#rpBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Thick Stem -->
      <path d="M200,260 Q195,160 200,60" stroke="#3E2723" stroke-width="12" stroke-linecap="round"/>
      <!-- Emerging Red Sheath Spire -->
      <polygon points="196,70 200,30 204,70" fill="#D32F2F"/>
      <!-- Glossy Broad Oval Leaves -->
      <g filter="url(#shadow)">
        <!-- Top Leaf -->
        <ellipse cx="160" cy="90" rx="35" ry="22" transform="rotate(-25 160 90)" fill="url(#burgundyLeaf)"/>
        <path d="M195,95 Q160,90 130,80" stroke="#C62828" stroke-width="2.5" fill="none"/>
        <ellipse cx="240" cy="110" rx="36" ry="23" transform="rotate(25 240 110)" fill="url(#burgundyLeaf)"/>
        <path d="M200,115 Q240,110 270,105" stroke="#C62828" stroke-width="2.5" fill="none"/>
        <!-- Mid Leaves -->
        <ellipse cx="140" cy="150" rx="42" ry="26" transform="rotate(-30 140 150)" fill="url(#burgundyLeaf)"/>
        <path d="M195,155 Q140,150 105,140" stroke="#C62828" stroke-width="3" fill="none"/>
        <ellipse cx="260" cy="170" rx="42" ry="26" transform="rotate(30 260 170)" fill="url(#burgundyLeaf)"/>
        <path d="M200,175 Q260,170 295,160" stroke="#C62828" stroke-width="3" fill="none"/>
      </g>
      <!-- Sleek White Matte Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#FFFFFF"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#ECEFF1"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#212121"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#EEEEEE"/>
      </g>
    </svg>
  `,

  'bamboo-palm.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="bpBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F8F5"/>
          <stop offset="100%" stop-color="#D1F2EB"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#bpBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Bamboo Ringed Canes -->
      <path d="M190,260 L185,90" stroke="#8D6E63" stroke-width="6" stroke-linecap="round"/>
      <line x1="184" y1="180" x2="188" y2="180" stroke="#4E342E" stroke-width="3"/>
      <line x1="185" y1="130" x2="187" y2="130" stroke="#4E342E" stroke-width="3"/>
      <path d="M210,260 L215,80" stroke="#8D6E63" stroke-width="6" stroke-linecap="round"/>
      <line x1="212" y1="170" x2="216" y2="170" stroke="#4E342E" stroke-width="3"/>
      <line x1="213" y1="120" x2="217" y2="120" stroke="#4E342E" stroke-width="3"/>
      <!-- Palm Foliage Fronds -->
      <g fill="#2E7D32">
        <path d="M185,90 Q120,60 70,50 Q125,80 185,90 Z"/>
        <path d="M185,90 Q140,40 110,20 Q150,60 185,90 Z"/>
        <path d="M215,80 Q280,50 330,40 Q275,70 215,80 Z"/>
        <path d="M215,80 Q260,30 290,10 Q250,50 215,80 Z"/>
        <path d="M187,140 Q110,130 60,130 Q120,150 187,140 Z"/>
        <path d="M213,130 Q290,120 340,120 Q280,140 213,130 Z"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#455A64"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#607D8B"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#263238"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#78909C"/>
      </g>
    </svg>
  `,

  'areca-palm.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="apBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFDE7"/>
          <stop offset="100%" stop-color="#FFF9C4"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#apBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Golden Arching Stems -->
      <path d="M200,260 Q170,160 110,80" stroke="#FDD835" stroke-width="5" fill="none"/>
      <path d="M200,260 Q230,160 290,80" stroke="#FDD835" stroke-width="5" fill="none"/>
      <path d="M200,260 Q195,140 190,40" stroke="#FDD835" stroke-width="6" fill="none"/>
      <path d="M200,260 Q140,200 60,160" stroke="#FBC02D" stroke-width="4.5" fill="none"/>
      <path d="M200,260 Q260,200 340,160" stroke="#FBC02D" stroke-width="4.5" fill="none"/>
      <!-- Feathery Needle Fronds -->
      <g stroke="#388E3C" stroke-width="3" stroke-linecap="round">
        <line x1="110" y1="80" x2="80" y2="70"/>
        <line x1="125" y1="100" x2="95" y2="90"/>
        <line x1="140" y1="120" x2="110" y2="110"/>
        <line x1="155" y1="145" x2="125" y2="135"/>
        <line x1="290" y1="80" x2="320" y2="70"/>
        <line x1="275" y1="100" x2="305" y2="90"/>
        <line x1="260" y1="120" x2="290" y2="110"/>
        <line x1="245" y1="145" x2="275" y2="135"/>
        <line x1="190" y1="40" x2="165" y2="30"/>
        <line x1="190" y1="40" x2="215" y2="30"/>
        <line x1="192" y1="70" x2="165" y2="60"/>
        <line x1="192" y1="70" x2="220" y2="60"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,250 260,250 245,345 155,345" fill="#00695C"/>
        <ellipse cx="200" cy="250" rx="60" ry="11" fill="#00897B"/>
        <ellipse cx="200" cy="250" rx="52" ry="7" fill="#004D40"/>
        <rect x="135" y="242" width="130" height="14" rx="5" fill="#4DB6AC"/>
      </g>
    </svg>
  `,

  'english-ivy.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="eiBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8F5E9"/>
          <stop offset="100%" stop-color="#C8E6C9"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#eiBg)"/>
      <ellipse cx="200" cy="360" rx="80" ry="12" fill="#000000" opacity="0.1"/>
      <!-- Trailing Vine Stems -->
      <path d="M200,250 Q130,280 110,360" stroke="#388E3C" stroke-width="3" fill="none"/>
      <path d="M200,250 Q270,280 290,360" stroke="#388E3C" stroke-width="3" fill="none"/>
      <path d="M200,250 Q200,300 210,370" stroke="#388E3C" stroke-width="3" fill="none"/>
      <!-- Ivy Leaves (Star/3-5 lobed shaped) -->
      <g fill="#1B5E20">
        <!-- Top bush -->
        <path d="M190,200 L180,180 L200,165 L220,180 L210,200 Z"/>
        <path d="M160,220 L145,200 L165,185 L185,200 L175,220 Z"/>
        <path d="M240,220 L225,200 L245,185 L265,200 L255,220 Z"/>
        <!-- Trailing left leaves -->
        <path d="M135,280 L120,265 L140,250 L155,270 Z"/>
        <path d="M115,320 L100,305 L120,290 L135,310 Z"/>
        <!-- Trailing right leaves -->
        <path d="M265,280 L280,265 L260,250 L245,270 Z"/>
        <path d="M285,320 L300,305 L280,290 L265,310 Z"/>
        <!-- Center trailing leaves -->
        <path d="M205,300 L190,285 L210,270 L225,290 Z"/>
        <path d="M210,340 L195,325 L215,310 L230,330 Z"/>
      </g>
      <!-- Pot -->
      <g filter="url(#shadow)">
        <polygon points="140,230 260,230 245,315 155,315" fill="#D87A56"/>
        <ellipse cx="200" cy="230" rx="60" ry="11" fill="#E08E6D"/>
        <ellipse cx="200" cy="230" rx="52" ry="7" fill="#5D4037"/>
        <rect x="135" y="222" width="130" height="14" rx="5" fill="#BF613B"/>
      </g>
    </svg>
  `,

  'logo.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4CAF50"/>
          <stop offset="100%" stop-color="#1B5E20"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#logoGrad)"/>
      <!-- Sprouting leaf -->
      <path d="M50 78 C50 78 48 52 32 40 C45 38 62 48 62 65 C62 72 56 77 50 78 Z" fill="#FFFFFF"/>
      <path d="M50 78 C50 78 52 45 70 30 C72 45 62 60 50 78 Z" fill="#A5D6A7"/>
      <circle cx="50" cy="80" r="4" fill="#C8E6C9"/>
    </svg>
  `,

  'hero-bg.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#061c12"/>
          <stop offset="50%" stop-color="#0a2e1d"/>
          <stop offset="100%" stop-color="#12432a"/>
        </linearGradient>
        <radialGradient id="sunGlow" cx="60%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#2ecc71" stop-opacity="0.35"/>
          <stop offset="50%" stop-color="#27ae60" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0a2e1d" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f1c40f" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#e67e22" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <!-- Base Background -->
      <rect width="1920" height="1080" fill="url(#sky)"/>
      <rect width="1920" height="1080" fill="url(#sunGlow)"/>
      <rect width="1920" height="1080" fill="url(#goldGlow)"/>

      <!-- Botanical Silhouettes & Greenhouse Architecture -->
      <!-- Greenhouse glass arches -->
      <path d="M0,0 Q960,300 1920,0" stroke="#2ecc71" stroke-width="2" stroke-opacity="0.15" fill="none"/>
      <path d="M0,0 Q960,600 1920,0" stroke="#2ecc71" stroke-width="2" stroke-opacity="0.1" fill="none"/>
      <line x1="960" y1="0" x2="960" y2="1080" stroke="#2ecc71" stroke-width="2" stroke-opacity="0.12"/>
      <line x1="480" y1="0" x2="480" y2="1080" stroke="#2ecc71" stroke-width="1.5" stroke-opacity="0.08"/>
      <line x1="1440" y1="0" x2="1440" y2="1080" stroke="#2ecc71" stroke-width="1.5" stroke-opacity="0.08"/>

      <!-- Giant Monstera / Palm silhouettes along edges -->
      <!-- Left side foliage -->
      <g fill="#05190f" opacity="0.7">
        <path d="M-100,1080 C0,750 150,550 50,400 C150,500 250,750 150,1080 Z"/>
        <path d="M-50,1080 C100,800 300,700 200,500 C280,680 350,900 250,1080 Z"/>
        <path d="M0,1080 C200,900 450,850 400,650 C450,800 500,950 400,1080 Z"/>
      </g>
      <!-- Right side foliage -->
      <g fill="#05190f" opacity="0.7">
        <path d="M2020,1080 C1920,750 1770,550 1870,400 C1770,500 1670,750 1770,1080 Z"/>
        <path d="M1970,1080 C1820,800 1620,700 1720,500 C1640,680 1570,900 1670,1080 Z"/>
        <path d="M1920,1080 C1720,900 1470,850 1520,650 C1470,800 1420,950 1520,1080 Z"/>
      </g>
      <!-- Subtle particle fireflies -->
      <circle cx="300" cy="400" r="3" fill="#a8f5c8" opacity="0.6"/>
      <circle cx="500" cy="250" r="2.5" fill="#fef08a" opacity="0.5"/>
      <circle cx="850" cy="320" r="3.5" fill="#a8f5c8" opacity="0.7"/>
      <circle cx="1200" cy="200" r="2" fill="#fef08a" opacity="0.6"/>
      <circle cx="1550" cy="420" r="3" fill="#a8f5c8" opacity="0.5"/>
      <circle cx="1700" cy="300" r="2.5" fill="#fef08a" opacity="0.7"/>
      <circle cx="950" cy="500" r="4" fill="#6ee7b7" opacity="0.4"/>
    </svg>
  `
};

for (const [filename, content] of Object.entries(plantSvgs)) {
  fs.writeFileSync(path.join(imagesDir, filename), content.trim());
}

console.log(`Successfully generated ${Object.keys(plantSvgs).length} image assets in public/images/`);
