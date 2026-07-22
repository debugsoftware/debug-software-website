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
│       └── deploy.yml          # Validação do Compose de produção
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
├── deploy/production/
│   └── docker-compose.yml      # Definição versionada do serviço em produção
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
PR em deploy/**   : Validação do Compose de produção
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

O workflow não executa deploy e não se conecta à infraestrutura. Ele valida `deploy/production/docker-compose.yml` em pull requests que alterem `deploy/**` ou o próprio workflow. O `workflow_dispatch` permite repetir somente essa validação de forma manual.

As verificações cobrem a sintaxe do Compose, a imagem fixa, a ausência de portas publicadas, o uso exclusivo da rede externa `proxy` e as configurações de domínio, rede e certificado do Traefik.

**Fluxo de entrega:**

```
PR → validação do Compose → merge → release → deploy operacional manual
```

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

| Tag     | Exemplo |
| ------- | ------- |
| `x.y.z` | `1.2.3` |
| `x.y`   | `1.2`   |
| `x`     | `1`     |

**Pull da imagem:**

```bash
docker pull ghcr.io/debugsoftware/debug-software-website:1.2.0
```

### Proteção da Branch Main

A branch `main` está protegida com as seguintes regras:

- Pull Request obrigatório para merge (1 aprovação mínima)
- Status checks obrigatórios: "Build & Type Check" e "Tests"
- Dismiss stale reviews ao push de novas alterações
- Histórico linear obrigatório (squash/rebase)
- Sem force push ou deleção

### Credencial do workflow de release

| Nome       | Tipo   | Descrição                                                          |
| ---------- | ------ | ------------------------------------------------------------------ |
| `GH_TOKEN` | Secret | PAT do admin com permissão `repo` para bypass da branch protection |

> O `GH_TOKEN` é necessário para que o Semantic Release consiga fazer push de tags e do CHANGELOG.md diretamente na `main`, contornando a regra de PR obrigatório. Nenhum valor de credencial deve ser armazenado no repositório.

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
| Container Runtime | Docker + Docker Compose             |
| Reverse Proxy     | Traefik                             |
| TLS               | Let's Encrypt (via Traefik)         |
| DNS               | Cloudflare (proxy)                  |
| Registry          | GitHub Container Registry (ghcr.io) |
| Web Server        | Nginx (Alpine)                      |

O deploy operacional é realizado manualmente por uma conexão privada Tailscale. O GitHub Actions apenas valida o arquivo Compose e não acessa a VPS nem altera containers.

### Estrutura na VPS

```
/opt/docker/debug-software-website/docker-compose.yml
```

Esse é o caminho futuro do Compose na VPS. A definição versionada correspondente está em `deploy/production/docker-compose.yml` e utiliza somente a rede externa `proxy`, sem publicar portas no host.

Antes de qualquer alteração de DNS, a operação deve validar no origin que o container está saudável, que o router do Traefik está ativo para `www.debugsoftware.com.br` e que o certificado TLS foi emitido corretamente. Somente após essas verificações o DNS poderá ser alterado.
