# 🚀 Rails Template — Postgres + Inertia + RSpec + FactoryBot + pnpm + Vite

Um **template Rails moderno e completo**, configurado com tudo que você precisa pra começar um novo projeto rapidamente.

> 💡 Inclui:
> ✅ Ruby on Rails + PostgreSQL
> ✅ Inertia.js + React + Vite
> ✅ RSpec + FactoryBot
> ✅ RuboCop + pnpm + ESLint + Prettier
> ✅ GitHub Actions CI/CD (RSpec, Rubocop, pnpm lint)

---

## 📦 Instalação

Clone o template e instale as dependências:

```bash
git clone git@github.com:VictorHSCosta/Template_rails_inertia.git
cd my_app
bundle install
pnpm install
bin/rails db:setup
```

---

## ⚙️ Configurações principais

### Postgres

Para instalar o postgres escolha uma dessas opcoes abaixo de acordo com seu sistema operacional

 - Install the pg driver:
   `gem install pg`
 - On macOS with Homebrew:
   `gem install pg -- --with-pg-config=/opt/homebrew/bin/pg_config`
 - On Windows:
   `gem install pg`
     - Choose the win32 build.
     - Install PostgreSQL and put its /bin directory on your path.

 Configure Using Gemfile
 gem "pg"


### 🧠 Ambiente

* Ruby: use a versão definida em `.ruby-version`
* Node: 20+
* Banco de dados: PostgreSQL

Crie o arquivo `.env` (ou use `config/application.yml`):

```bash
PG_USERNAME=postgres
PG_PASSWORD=sua_senha
PG_HOST=127.0.0.1
PG_PORT=5432
```

---

### 🧩 Frontend (Vite + Inertia + React)

Os arquivos do frontend ficam em:

```
app/frontend/
├── entrypoints/inertia.js
├── components/
├── pages/
└── styles/
```

Inicie o servidor Vite:

```bash
bin/vite dev
```

---

### 🧪 Testes (RSpec)

```bash
bundle exec rspec
```

Adiciona suporte a **FactoryBot** e **DatabaseCleaner** prontos para uso.

---

### 🔍 Lint e formatação

#### Ruby

```bash
bundle exec rubocop --parallel
```

#### JavaScript

```bash
pnpm lint
pnpm lint:fix
```

#### Prettier

```bash
pnpm format
```

---

### ⚡ CI/CD (GitHub Actions)

Esse template vem com um workflow pronto: `.github/workflows/ci.yml`

Ele roda automaticamente em cada push ou PR:

* `bundle exec rubocop`
* `bundle exec rspec`
* `pnpm lint`

---

## 🧰 Estrutura resumida

```
app/
  ├── controllers/
  ├── frontend/
  │   ├── entrypoints/inertia.js
  │   ├── components/
  │   ├── pages/
  │   └── styles/
  ├── models/
  ├── views/
  └── ...
spec/
  ├── models/
  ├── requests/
  ├── support/
  └── factories/
.github/
  └── workflows/ci.yml
```

---

## 💬 Sobre este template

Este é meu **template pessoal de Rails moderno** — já vem com tudo que costumo usar nos meus projetos:

> Rails + Postgres + RSpec + FactoryBot + Rubocop + pnpm + ESLint + Inertia.js (React)

Pode usar à vontade pra criar seus próprios projetos, ajustar, forkar e melhorar.
Sinta-se em casa 🧠💻

---

## 🧑‍💻 Autor

**Victor Henrique Costa**
💼 [LinkedIn]([https://linkedin.com/in/seu-perfil](https://www.linkedin.com/in/victorcostahs/])

---


### Arquitetura do projeto 
RichTextEditor/
  index.jsx                # exporta o componente principal (entry point)

  RichTextEditor.jsx       # componente “container” do editor

  toolbar/
    Toolbar.jsx            # barra inteira
    ToolbarButton.jsx      # botão genérico
    ToolbarSelect.jsx      # select genérico (fonte, tamanho, etc)
    toolbarConfig.js       # definição dos botões (tipo: bold, italic, etc)

  editor/
    EditorArea.jsx         # <div contentEditable> + ref
    useEditorDom.js        # hook que fala com o DOM (selection, comandos)

  state/
    useEditorState.js      # se quiser controlar coisas em React (modo, tema etc)

  dom/
    selection.js           # helpers só de seleção
    commands.js            # helpers que aplicam bold, italic, heading etc
    clipboard.js           # (opcional) copiar/colar custom

  styles.css               # estilos específicos do editor (ou .module.css)

## ⭐ Se curtir, deixe uma estrela no repositório :)

Apoia demais quem compartilha conteúdo open source 💙

---
