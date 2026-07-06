# Brainstorm de Design — Debug Software LTDA

## Três Abordagens Estilísticas

### 1. Cyber Noir
**Intro:** Estética dark futurista inspirada em interfaces de terminal e hacking ético, com tipografia monospace e efeitos de glitch sutis. Transmite alta competência técnica e sofisticação.
**Probabilidade:** 0.07

### 2. Gradient Cosmos
**Intro:** Design escuro com gradientes vibrantes de azul-ciano a roxo, evocando o cosmos digital. Formas orgânicas fluidas e partículas luminosas criam profundidade e movimento, transmitindo inovação e futuro.
**Probabilidade:** 0.08

### 3. Clean Engineering
**Intro:** Minimalismo industrial com grid assimétrico, muito espaço em branco sobre fundo escuro, e acentos de cor precisos. Comunica precisão engenheira e confiança corporativa.
**Probabilidade:** 0.06

---

## Abordagem Escolhida: Gradient Cosmos

### Design Movement
Neo-futurismo digital — interfaces escuras com gradientes luminosos que evocam profundidade espacial e tecnologia avançada.

### Core Principles
1. **Profundidade Luminosa** — camadas de luz sobre escuridão criam hierarquia visual natural
2. **Fluidez Orgânica** — formas suaves e gradientes contrastam com a precisão do código
3. **Minimalismo Funcional** — cada elemento tem propósito, sem decoração gratuita
4. **Movimento Sutil** — animações discretas que guiam o olhar sem distrair

### Color Philosophy
O fundo navy profundo (#0a0a1a) representa o espaço infinito de possibilidades. O gradiente de roxo (#7b2ff7) a ciano (#00b4d8) simboliza a transformação — do problema bruto à solução elegante. Estes são os mesmos tons da logo, criando coesão total entre marca e interface.

### Layout Paradigm
Layout assimétrico com seções full-width que alternam entre conteúdo centralizado e composições off-center. Cards flutuantes com glassmorphism criam profundidade. Espaçamento generoso entre seções para respiração visual.

### Signature Elements
1. **Glow orbs** — esferas difusas de gradiente que flutuam no background, criando atmosfera cósmica
2. **Glass cards** — containers com backdrop-blur e bordas semi-transparentes
3. **Gradient lines** — separadores e bordas com o gradiente da marca

### Interaction Philosophy
Interações revelam luz — hover states iluminam elementos com o gradiente da marca. Transições suaves (200-300ms) com easing natural. Elementos respondem ao interesse do usuário com brilho sutil.

### Animation
- Entrada de seções com fade-in + translate-y sutil (20px) ao scroll
- Glow orbs com animação de flutuação lenta (8-12s)
- Cards com hover que eleva (translateY -4px) e intensifica glow
- CTA com pulse sutil no gradiente
- Duração padrão: 200ms para UI, 600ms para entradas de seção

### Typography System
- **Display/Headlines:** Space Grotesk (bold, 700) — geométrica e moderna
- **Body:** Inter (regular 400, medium 500) — legibilidade máxima
- **Hierarquia:** H1 4rem, H2 2.5rem, H3 1.5rem, Body 1rem, Small 0.875rem

### Brand Essence
Debug Software transforma operações complexas em automações inteligentes para empresas que precisam escalar sem multiplicar equipe. Personalidade: **Precisa, Inovadora, Confiável**.

### Brand Voice
Headlines diretas e técnicas com confiança, sem jargão vazio. CTAs orientados a resultado.
- Exemplo headline: "Automações que trabalham enquanto você dorme"
- Exemplo CTA: "Agende uma conversa técnica"

### Wordmark & Logo
Inseto (bug) estilizado com símbolo de código "</>" — já existente. Será usado em tamanho proeminente no header com glow sutil.

### Signature Brand Color
Gradiente linear de #7b2ff7 (roxo) a #00b4d8 (ciano) — o "Debug Gradient".

---

## Style Decisions
- Fundo principal: #0a0a1a (navy profundo)
- Fundo de cards: rgba(255, 255, 255, 0.03) com backdrop-blur
- Texto principal: #ffffff
- Texto secundário: #a0aec0
- Gradiente primário: linear-gradient(135deg, #7b2ff7, #00b4d8)
- Border de cards: rgba(255, 255, 255, 0.08)
- Fonte display: Space Grotesk
- Fonte body: Inter
- **Composition rule:** Layouts devem alternar momentos centralizados (hero) com clusters de conteúdo visivelmente off-center/staggered para nunca parecer SaaS genérico.
- **Imagery rule:** Visuais de IA/automação devem incluir motivos próprios da Debug — ecos do bug/code mark, caminhos de nós orbitais, data streams com gradiente.
- **Gradient rule:** O Debug Gradient (#7b2ff7 → #00b4d8) é reservado para ações primárias, ênfase em headlines-chave e bordas/linhas de assinatura; decoração secundária fica restrita.
