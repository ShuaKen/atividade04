# Product Review App

Este é um aplicativo React que permite aos usuários adicionar produtos, avaliar esses produtos e visualizar as avaliações. A aplicação é dividida em componentes para melhor organização e reutilização do código.

## Tecnologias Usadas

- React
- CSS
- Fetch API para comunicação com um backend (assumido que está rodando localmente na porta 3005)

## Funcionalidades

- Adicionar novos produtos com nome, imagem e descrição.
- Avaliar produtos com uma classificação de 1 a 5 estrelas.
- Visualizar avaliações de produtos com detalhes como nome do avaliador e email.


### Componentes Principais

- **Products**: Componente principal que gerencia a lista de produtos e avaliações.
- **Product**: Exibe informações de cada produto e permite a exclusão.
- **RatingForm**: Formulário para adicionar avaliações a produtos.
- **ReviewList**: Lista que exibe as avaliações feitas.
- **StarRating**: Componente que permite ao usuário selecionar uma classificação em estrelas.

## Instalação

Para instalar a aplicação, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/ShuaKen/atividade04.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd atividade004
   ```

## Uso

Para iniciar a aplicação, use o seguinte comando:

```bash
npm start
```

Acesse a aplicação no seu navegador em `http://localhost:3000`.

### Exemplo de uso

Após a inicialização, pode ver os produtos já adicionados, adicionar mais e excluir, também pode fazer comentarios.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato:

- Email: joshuadsouzaken@gmail.com
- GitHub: [usuario](https://github.com/ShuaKen)
