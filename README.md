# CHOZZEN — DJ & Producer Portfolio

Uma página web moderna e responsiva para o artista CHOZZEN, construída com **Vite**, **React** e **TypeScript**.

## Estrutura do Projeto

```
chozzen/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Navigation.tsx   # Navegação principal
│   │   ├── Cursor.tsx       # Cursor customizado
│   │   ├── Hero.tsx         # Seção hero com animações
│   │   ├── Bio.tsx          # Seção de biografia
│   │   ├── Music.tsx        # Seção de música/sets
│   │   ├── Experience.tsx   # Seção de atuação
│   │   ├── Visual.tsx       # Seção visual/galeria
│   │   ├── Contact.tsx      # Seção de contato
│   │   └── Footer.tsx       # Rodapé
│   ├── hooks/
│   │   └── useCursor.ts     # Hook para lógica do cursor
│   ├── constants/
│   │   └── data.ts          # Dados e constantes
│   ├── styles/
│   │   └── globals.css      # Estilos globais
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Ponto de entrada
├── index.html               # HTML principal
├── vite.config.ts           # Configuração Vite
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências
└── README.md
```

## Tecnologias

- **Vite** - Build tool rápido e moderno
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilos componentizados

## Instalação

1. **Clone ou extraia o projeto:**
```bash
cd chozzen
```

2. **Instale as dependências:**
```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## Build

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos estarão em `dist/`

## Preview

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## Componentes Principais

### Navigation
Navegação fixa com links suave para as seções principais.

### Hero
Seção principal com:
- Animação de partículas flutuantes
- Grade de fundo
- Efeito glitch no título
- Botão CTA
- Indicador de scroll

### Bio
Seção de apresentação com imagem e biografia.

### Music
Seção para showcasing de sets com visualizador de onda.

### Experience
Cards com as áreas de atuação (festas, eventos privados, produção, etc).

### Visual
Galeria de imagens/projetos visuais.

### Contact
Seção com links de contato (email, WhatsApp, Instagram) e botão de booking.

## Customização

### Cores
Edite as variáveis CSS em `src/styles/globals.css`:
```css
:root {
  --purple-deep: #2B1E4B;
  --blue-freq: #3D6BF0;
  --violet: #8247FF;
  /* ... */
}
```

### Dados
Atualize constantes em `src/constants/data.ts`:
- `CARDS` - Cards de experiência
- `GALLERY_ITEMS` - Itens da galeria
- `NAV_LINKS` - Links da navegação

### Estilos
Cada componente tem seu próprio `*.module.css` para estilos isolados.

## Responsividade

O projeto é totalmente responsivo com breakpoints em 768px para dispositivos móveis.

## Performance

- Code splitting automático
- Lazy loading de componentes
- CSS otimizado
- Animações GPU-aceleradas

---

**Desenvolvido com ❤️ por Breno**
