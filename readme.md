<h3 align="center">
Desafio SMD - CRUD para gestão de apartamentos
</h3>

## :gear: Back-end

## Pré requisitos

- Git [Git](https://git-scm.com)
- PHP [PHP](https://www.php.net/manual/pt_BR/index.php)
- MariaDB [MariaDB](https://mariadb.org/)
- Docker [Docker](https://www.docker.com/)
- Docker Compose [Docker Compose](https://docs.docker.com/compose/)

## Instruções

```bash
# clonar o repositório
git clone https://github.com/davidfaria/desafio-CRUD-lumen-vue_js.git

# entrar na pasta do projeto
cd desafio-CRUD-lumen-vue_js/backend

# criar .env para informar as SUAS variáveis de ambiente
cp .env.example .env

# subir os serviços (mariadb e php)
docker-compose up -d

# Entar dentro do container PHP
docker exec -it php bash

# Instalar as dependências
composer install

# Gerar as key
# php artisan key:generate
php artisan jwt:secret

# Excutar as migrations e seeds
php artisan migrate:fresh --seed

# Subir o server (API)
php -S 0.0.0.0:8000 -t ./public

```

---

## :computer: Front-end

## Pré requisitos

- Git [Git](https://git-scm.com)
- Node.js [Node.js v10.16](https://nodejs.org/)
- Yarn [Yarn v1.13](https://yarnpkg.com/)
- Google Chrome Browser [Google](https://www.google.pt/intl/pt-PT/chrome/?brand=CHBD&gclid=CjwKCAiAxMLvBRBNEiwAKhr-nMvKg5nZhwHd__xLE-Mume31jYijN5WLG991vsf4owDGK4VNHWtrEhoCNRgQAvD_BwE&gclsrc=aw.ds)
- Back-end

## Instruções

```bash

# entrar na pasta do projeto
cd desafio-CRUD-lumen-vue_js/frontend

# instalando as dependências do package.json:
yarn install

# iniciar a aplicação web
yarn serve
```

## Teste utilizando o browser.

http://localhost:8080

```bash

# credenciais de acesso
user: admin@gmail.com
password: 123456
```

---

## Demonstração

<h1 align="center">
<img src="https://raw.githubusercontent.com/davidfaria/desafio-CRUD-lumen-vue_js/master/.github/web.gif">
</h1>

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
