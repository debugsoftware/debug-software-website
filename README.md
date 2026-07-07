# Debug Software - Website Institucional

Website informativo de página única para a **Debug Software LTDA**, empresa especializada em soluções e automações com inteligência artificial.

## Visão Geral

Site institucional moderno e minimalista com design "Gradient Cosmos" — fundo escuro com gradientes luminosos de roxo a ciano, glassmorphism e animações sutis. Totalmente responsivo para desktop e mobile.

## Funcionalidades

- Política de Privacidade completa (LGPD) com modal overlay
- Política de Segurança da Informação com modal overlay
- Animações suaves de entrada ao rolar (scroll-triggered) com Framer Motion
- Efeitos de hover elaborados nos cards de soluções (glow, shimmer, scale)
- Animações staggered no hero e seções de conteúdo
- Micro-interações nos botões (scale, shadow) e cards de contato
- Menu mobile com animação de abertura/fechamento via AnimatePresence
- Orbs de glow com animação de pulso contínuo no hero

## Seções

| Seção         | Descrição                                               |
| ------------- | ------------------------------------------------------- |
| **Header**    | Navegação fixa com glassmorphism e logo                 |
| **Hero**      | Logo proeminente, headline impactante e call-to-action  |
| **Soluções**  | Cards destacando IA, Automações e Soluções Customizadas |
| **Sobre**     | Descrição profissional da empresa com valores           |
| **Contato**   | Formulário de contato e informações de telefone/e-mail  |
| **Footer**    | Dados completos da empresa (CNPJ, endereço, telefone)   |
| **Políticas** | Política de Privacidade (LGPD) e Política de Segurança  |

## Stack Tecnológico

| Tecnologia    | Versão      |
| ------------- | ----------- |
| React         | 19          |
| TypeScript    | 5.9         |
| Tailwind CSS  | 4           |
| Framer Motion | 12          |
| Vite          | 7           |
| Node.js       | 24          |
| Docker        | Multi-stage |
| Husky         | 9           |

## Estrutura de Arquivos

```
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI: lint, build, test em PRs
│       ├── release.yml         # Release: semantic version + Docker
│       └── deploy.yml          # Deploy manual: staging/production
├── .husky/
│   ├── commit-msg              # Hook: valida conventional commits
│   └── pre-commit              # Hook: lint-staged (prettier)
├── client/src/
│   ├── components/
│   │   ├── Header.tsx          # Navegação fixa
│   │   ├── HeroSection.tsx     # Seção principal
│   │   ├── SolutionsSection.tsx # Serviços oferecidos
│   │   ├── AboutSection.tsx    # Sobre a empresa
│   │   ├── ContactSection.tsx  # Formulário de contato
│   │   └── Footer.tsx          # Rodapé institucional
│   ├── pages/
│   │   └── Home.tsx            # Página única compondo todas as seções
│   ├── App.tsx                 # Roteamento e providers
│   ├── index.css               # Tema e design tokens
│   └── main.tsx                # Entry point
├── Dockerfile                  # Multi-stage build para produção
├── .dockerignore
├── .releaserc.json             # Configuração do semantic-release
├── commitlint.config.cjs       # Regras de conventional commits
└── package.json
```

## CI/CD Pipeline

### Visão Geral do Fluxo

```
PR → main         : CI (lint commits + build + test)
merge → main      : Release (build + test + semantic version + changelog + Docker push)
manual trigger    : Deploy (staging ou production via VPS + Traefik)
```

### Workflow CI (`ci.yml`)

Executado em **pull requests** e **pushes** para a branch `main`:

| Job                    | Descrição                                                 |
| ---------------------- | --------------------------------------------------------- |
| **Lint Commits**       | Valida mensagens de commit com commitlint (apenas em PRs) |
| **Build & Type Check** | Compila TypeScript e gera build de produção               |
| **Tests**              | Executa suíte de testes com Vitest                        |

### Workflow Release (`release.yml`)

Executado apenas no **merge para main**:

| Job                  | Descrição                                                                      |
| -------------------- | ------------------------------------------------------------------------------ |
| **Build & Test**     | Validação completa antes do release                                            |
| **Semantic Release** | Gera próxima versão (SemVer), atualiza CHANGELOG.md, cria tag e GitHub Release |
| **Docker**           | Build multi-stage e push para GitHub Container Registry (ghcr.io)              |

### Workflow Deploy (`deploy.yml`)

Executado de duas formas:

1. **Automaticamente** — após conclusão bem-sucedida do workflow Release, faz deploy automático em **production**
2. **Manualmente** — via `workflow_dispatch` selecionando o environment desejado

| Parâmetro       | Opções                    |
| --------------- | ------------------------- |
| **environment** | `staging` ou `production` |

O deploy conecta via SSH na VPS Hostinger (82.29.62.198), faz pull da imagem Docker do ghcr.io e recria o container com docker-compose + labels do Traefik para roteamento automático com TLS (Let's Encrypt).

**Fluxo completo de deploy:**

```
merge → main → Release (tag + Docker image) → Deploy automático → production
```

**Environments configurados:**

| Environment    | Domínio                        | VPS Host       |
| -------------- | ------------------------------ | -------------- |
| **staging**    | staging.debugsoftware.com.br   | 82.29.62.198   |
| **production** | www.debugsoftware.com.br       | 82.29.62.198   |

### Versionamento Semântico

O versionamento segue o padrão [Semantic Versioning 2.0.0](https://semver.org/):

| Tipo de Commit                              | Incremento de Versão |
| ------------------------------------------- | -------------------- |
| `feat:`                                     | Minor (1.x.0)        |
| `fix:`, `perf:`, `refactor:`                | Patch (1.0.x)        |
| `BREAKING CHANGE:`                          | Major (x.0.0)        |
| `docs:`, `style:`, `chore:`, `ci:`, `test:` | Sem release          |

### Conventional Commits

Todos os commits devem seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Tipos permitidos:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Exemplos:**

```bash
git commit -m "feat(hero): adiciona animação de parallax no background"
git commit -m "fix(contact): corrige validação do campo e-mail"
git commit -m "docs: atualiza README com instruções de deploy"
```

### Git Hooks (Husky)

Os hooks são instalados automaticamente via `pnpm install` (script `prepare`):

| Hook           | Ação                                               |
| -------------- | -------------------------------------------------- |
| **commit-msg** | Valida mensagem de commit com commitlint           |
| **pre-commit** | Executa lint-staged (Prettier nos arquivos staged) |

### Docker Image

A imagem Docker é publicada no **GitHub Packages** (ghcr.io) com as seguintes tags:

| Tag      | Exemplo                 |
| -------- | ----------------------- |
| `x.y.z`  | `1.2.3`                 |
| `x.y`    | `1.2`                   |
| `x`      | `1`                     |
| `latest` | Sempre a última release |

**Pull da imagem:**

```bash
docker pull ghcr.io/debugsoftware/debug-software-website:latest
```

**Executar localmente:**

```bash
docker run -p 3000:3000 ghcr.io/debugsoftware/debug-software-website:latest
```

### Proteção da Branch Main

A branch `main` está protegida com as seguintes regras:

- Pull Request obrigatório para merge (1 aprovação mínima)
- Status checks obrigatórios: "Build & Type Check" e "Tests"
- Dismiss stale reviews ao push de novas alterações
- Histórico linear obrigatório (squash/rebase)
- Sem force push ou deleção

### GitHub Environments

| Environment    | Política de Deploy                  | Uso                    |
| -------------- | ----------------------------------- | ---------------------- |
| **staging**    | Branches `main` e `develop`         | Validação pré-produção |
| **production** | Apenas branches protegidas (`main`) | Ambiente final         |

**Secrets do repositório (obrigatórios para CI/CD):**

| Nome          | Tipo     | Descrição                                                                |
| ------------- | -------- | ------------------------------------------------------------------------ |
| `GH_TOKEN`    | Secret   | PAT do admin com permissão `repo` para bypass da branch protection       |

> O `GH_TOKEN` é necessário para que o Semantic Release consiga fazer push de tags e do CHANGELOG.md diretamente na `main`, contornando a regra de PR obrigatório. O token deve pertencer a um admin do repositório (com `enforce_admins: false`).

**Variáveis e Secrets necessários por environment (deploy):**

| Nome          | Tipo     | Descrição                                            |
| ------------- | -------- | ---------------------------------------------------- |
| `VPS_HOST`    | Variable | IP ou hostname da VPS Hostinger                      |
| `VPS_USER`    | Variable | Usuário SSH para deploy                              |
| `VPS_SSH_KEY` | Secret   | Chave SSH privada para acesso à VPS                  |
| `DOMAIN`      | Variable | Domínio do ambiente (ex: `www.debugsoftware.com.br`) |

## Design

O design segue a abordagem **Gradient Cosmos** com paleta extraída diretamente da logo da empresa:

| Elemento           | Cor                         |
| ------------------ | --------------------------- |
| Background         | `#0a0a1a`                   |
| Gradiente primário | `#7b2ff7` → `#00b4d8`       |
| Texto principal    | `#ffffff`                   |
| Texto secundário   | `rgba(255, 255, 255, 0.50)` |
| Bordas             | `rgba(255, 255, 255, 0.08)` |

**Tipografia:** Space Grotesk (display) + Inter (body)

## Dados da Empresa

| Campo        | Valor                                                                     |
| ------------ | ------------------------------------------------------------------------- |
| Razão Social | DEBUG SOFTWARE LTDA                                                       |
| CNPJ         | 46.428.797/0001-23                                                        |
| Endereço     | Av. Paulista, nº 1636, Conjunto 4, Pavimento 15, Bela Vista, São Paulo-SP |
| Telefone     | (91) 98051-4660                                                           |

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

**Scripts disponíveis:**

| Script              | Descrição                           |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Servidor de desenvolvimento com HMR |
| `pnpm build`        | Build de produção                   |
| `pnpm check`        | Type check com TypeScript           |
| `pnpm test`         | Executa testes com Vitest           |
| `pnpm format`       | Formata código com Prettier         |
| `pnpm lint:commits` | Valida último commit                |

## Deploy

O site é hospedado com domínio customizado `www.debugsoftware.com.br` via Cloudflare proxy. A infraestrutura utiliza:

| Componente        | Tecnologia                          |
| ----------------- | ----------------------------------- |
| Cloud             | Hostinger VPS (Ubuntu)              |
| IP                | 82.29.62.198                        |
| Container Runtime | Docker + Docker Compose             |
| Reverse Proxy     | Traefik                             |
| TLS               | Let's Encrypt (via Traefik)         |
| DNS               | Cloudflare (proxy)                  |
| Registry          | GitHub Container Registry (ghcr.io) |
| Web Server        | Nginx (Alpine)                      |

O deploy é executado automaticamente após cada release bem-sucedida (production), ou manualmente via GitHub Actions (`workflow_dispatch`) para staging ou production.

### Configuração Necessária

Antes do primeiro deploy, configure o secret `VPS_SSH_KEY` nos dois environments (staging e production) em:

> Settings → Environments → [staging/production] → Add secret → `VPS_SSH_KEY`

A chave deve ser a chave SSH privada com acesso `root` à VPS.

### Estrutura na VPS

```
/opt/debug-software-website/
├── staging/
│   └── docker-compose.yml
└── production/
    └── docker-compose.yml
```

### Pré-requisitos na VPS

```bash
# Rede do Traefik (se ainda não existir)
docker network create traefik-network

# Diretórios de deploy
mkdir -p /opt/debug-software-website/{staging,production}
```
