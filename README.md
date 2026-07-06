# Debug Software - Website Institucional

Website informativo de página única para a **Debug Software LTDA**, empresa especializada em soluções e automações com inteligência artificial.

## Visão Geral

Site institucional moderno e minimalista com design "Gradient Cosmos" — fundo escuro com gradientes luminosos de roxo a ciano, glassmorphism e animações sutis. Totalmente responsivo para desktop e mobile.

## Seções

| Seção | Descrição |
|-------|-----------|
| **Header** | Navegação fixa com glassmorphism e logo |
| **Hero** | Logo proeminente, headline impactante e call-to-action |
| **Soluções** | Cards destacando IA, Automações e Soluções Customizadas |
| **Sobre** | Descrição profissional da empresa com valores |
| **Contato** | Formulário de contato e informações de telefone/e-mail |
| **Footer** | Dados completos da empresa (CNPJ, endereço, telefone) |

## Stack Tecnológico

| Tecnologia | Versão |
|------------|--------|
| React | 19 |
| TypeScript | 5.6 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Vite | 7 |

## Estrutura de Arquivos

```
client/src/
├── components/
│   ├── Header.tsx          # Navegação fixa
│   ├── HeroSection.tsx     # Seção principal
│   ├── SolutionsSection.tsx # Serviços oferecidos
│   ├── AboutSection.tsx    # Sobre a empresa
│   ├── ContactSection.tsx  # Formulário de contato
│   └── Footer.tsx          # Rodapé institucional
├── pages/
│   └── Home.tsx            # Página única compondo todas as seções
├── App.tsx                 # Roteamento e providers
├── index.css               # Tema e design tokens
└── main.tsx                # Entry point
```

## Design

O design segue a abordagem **Gradient Cosmos** com paleta extraída diretamente da logo da empresa:

| Elemento | Cor |
|----------|-----|
| Background | `#0a0a1a` |
| Gradiente primário | `#7b2ff7` → `#00b4d8` |
| Texto principal | `#ffffff` |
| Texto secundário | `rgba(255, 255, 255, 0.50)` |
| Bordas | `rgba(255, 255, 255, 0.08)` |

**Tipografia:** Space Grotesk (display) + Inter (body)

## Dados da Empresa

| Campo | Valor |
|-------|-------|
| Razão Social | DEBUG SOFTWARE LTDA |
| CNPJ | 46.428.797/0001-23 |
| Endereço | Av. Paulista, nº 1636, Conjunto 4, Pavimento 15, Bela Vista, São Paulo-SP |
| Telefone | (91) 98051-4660 |

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Deploy

O site é hospedado com domínio customizado `www.debugsoftware.com.br` via Cloudflare proxy.
