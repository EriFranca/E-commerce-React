# React E-commerce Store

Um e-commerce moderno e responsivo desenvolvido com React.js, demonstrando boas práticas de desenvolvimento e padrões de projeto escaláveis.

## 🚀 Características

Este e-commerce inclui funcionalidades essenciais para uma loja virtual moderna:

- Catálogo de produtos com filtragem e busca
- Carrinho de compras com persistência local
- Checkout integrado
- Painel administrativo para gestão de produtos
- Design responsivo para todos os dispositivos
- Sistema de autenticação de usuários
- Gestão de pedidos e histórico de compras

## 🛠️ Tecnologias Utilizadas

- **React.js 18.2.0**: Framework principal para construção da interface
- **React Router 6.x**: Gerenciamento de rotas e navegação
- **Redux Toolkit**: Gerenciamento de estado global
- **Styled Components**: Estilização de componentes
- **Axios**: Requisições HTTP
- **React Query**: Gerenciamento de estado do servidor
- **Jest & React Testing Library**: Testes unitários e de integração
- **Firebase**: Backend e autenticação
- **Stripe**: Processamento de pagamentos

## 📦 Instalação

Siga estes passos para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/react-ecommerce.git

# Entre no diretório
cd react-ecommerce

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔧 Configuração

1. Crie um projeto no Firebase e obtenha as credenciais
2. Configure uma conta no Stripe e obtenha as chaves de API
3. Preencha o arquivo .env com as seguintes variáveis:

```env
VITE_FIREBASE_API_KEY=sua_chave_api
VITE_FIREBASE_AUTH_DOMAIN=seu_dominio
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
```

## 🗂️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── services/           # Serviços e APIs
├── store/              # Configuração do Redux
├── hooks/              # Custom hooks
├── utils/              # Funções utilitárias
├── styles/             # Estilos globais
└── types/              # Definições de tipos TypeScript
```

## 🚥 Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera versão de produção
- `npm run test`: Executa testes unitários
- `npm run lint`: Executa verificação de código
- `npm run format`: Formata o código com Prettier

## 📱 Design Responsivo

O projeto é totalmente responsivo e testado nos seguintes breakpoints:
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large Desktop: 1025px+

## 🔒 Segurança

Implementamos várias medidas de segurança:

- Autenticação segura via Firebase
- Sanitização de inputs
- Proteção contra XSS
- Rate limiting em chamadas de API
- Validação de dados no frontend e backend

## 🧪 Testes

O projeto inclui testes abrangentes:

```bash
# Executa todos os testes
npm run test

# Executa testes com coverage
npm run test:coverage

# Executa testes em modo watch
npm run test:watch
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 Contato

Seu Nome - [@seuTwitter](https://twitter.com/seuTwitter) - email@example.com

Link do Projeto: [https://github.com/seu-usuario/react-ecommerce](https://github.com/seu-usuario/react-ecommerce)
