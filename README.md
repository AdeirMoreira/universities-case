<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API de Universidades 👩‍🎓🎓👨‍🎓 

Essa API foi desenvolvida para o case da Bis2Bis. Trata-se de um script para popular o banco de dados com registros de todas as universidades dos países da America do Sul, além de um CRUD dessas informações no banco de dados. Além do [NodeJS](https://nodejs.org/pt-br/) e do [NestJS](https://nestjs.com/), foi utilzado o banco de dados [MongoDB](https://www.mongodb.com/) e o framework [Moongose](https://mongoosejs.com/) para realizar a manipulação do banco de dados. Por fim, a documentação foi produzida utilizando o [Swagger](https://swagger.io/).

## Tecnologias e Técnicas 🛠
- [NodeJS](https://nodejs.org/pt-br/)
- [NestJS](https://nestjs.com/)
- [Moongose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)
- POO
- S-O-L-I-D

## Features ✔️ 

- [x] Script para consultar uma API pública sobre universidades da América do Sul.
- [x] CRUD dessas informações de universidades no banco de dados.
- [x] Validação das informações enviadas com  menssagens de erros personalizados.

## Preparar o Ambiente 🔨🧱

Clone e abra o projeto
```
git clone https://github.com/AdeirMoreira/universities-case.git
cd universities-case
```

Para rodar o projeto você precisará do Node e do NestJS na sua máquina
- [NodeJS](https://nodejs.org/pt-br/download/) 
- [NestJS](https://docs.nestjs.com/)

Para instalar o Nest rode o comando:
```
npm i -g @nestjs/cli
```
Para instalar as dependêcias do projeto:
```
npm install
```
## Executar o projeto 🔛

Para rodar o servidor na porta 3000
```
npm run start
```
Com o servidor online, a documentação detalhada sobre cada endpoint produzida com o Swagger pode ser encontrada no link http://localhost:3000/docs

Caso deseje começar a utilizar a API com o banco de dados populado, você pode popula-lo de duas formas:
- 1° Por meio do endpoint 
```
POST http://localhost:3000/database
```
- 2° com o comando
```
npm run populate
```
Ambas as formas popularão o banco de dados com todos os registros das universidades da América do Sul

## Testando os endpoints ▶
Voçe pode testar os endpoints da API de duas formas:
- 1° Por meio  documentação 
<p align="center">
  <img src="https://user-images.githubusercontent.com/98994187/192119055-49890f50-47c0-4089-a3dd-f88195d6c081.png" width="600" height="400" alt="Nest Logo" />
</p>

- 2° Por meio do arquivo api.http
<p align="center">
  <img src="https://user-images.githubusercontent.com/98994187/192119054-e29295d0-84a8-4c58-9bc0-13f5a63f241c.png" width="600" height="400" alt="Nest Logo" />
</p>

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br />   
</table>
