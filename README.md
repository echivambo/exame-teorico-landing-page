# Exame Teórico Moçambique 2026 - Landing Page

Esta é a landing page oficial, moderna e altamente otimizada do aplicativo Android **Exame Teórico Moçambique 2026**.

O projeto foi construído utilizando **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4** e **Framer Motion** para animações interativas e fluidas.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js (v18.17 ou superior, recomendado v20+)
* npm (instalado nativamente com Node.js)

### Passos
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 🛠️ Build de Produção Local

Para compilar e validar a aplicação localmente no modo de produção:

1. Gere a compilação standalone otimizada:
   ```bash
   npm run build
   ```

2. Inicialize o servidor de produção:
   ```bash
   npm run start
   ```

---

## 🐳 Deploy na VPS com Docker Compose & Traefik

A aplicação está configurada para deploy simplificado em produção usando **Docker Compose** atrás de um proxy reverso **Traefik** com HTTPS automático via Let's Encrypt.

### Requisitos no Servidor (VPS)
* Docker e Docker Compose instalados.
* Um serviço Traefik ativo escutando na rede Docker externa chamada `traefik_public`.
* Apontamentos DNS (tipo A) para o seu domínio (ex: `eteorico.automatizamoz.tech`) direcionados para o IP da VPS.

### Configuração Inicial
1. O arquivo [docker-compose.yml](file:///./docker-compose.yml) já está pré-configurado para o domínio `eteorico.automatizamoz.tech`.
2. Certifique-se de que o certificado SSL resolver do Traefik se chama `letsencrypt` (ou edite o campo `tls.certresolver` no compose caso utilize outro nome).

### Comandos de Deploy
Execute na pasta raiz do projeto na sua VPS:

```bash
# Iniciar a compilação e subir o container em segundo plano
docker compose up -d --build
```

O Docker compilará a aplicação de forma segura através do multi-stage `Dockerfile` (standalone), copiando apenas os arquivos mínimos compilados e reduzindo drasticamente o consumo de disco e memória da VPS.

### Logs do Container
Para monitorizar o funcionamento da aplicação:
```bash
docker compose logs -f
```

---

## 📱 Google AdMob (app-ads.txt)

Para ativar a monetização do aplicativo e evitar avisos de receita em risco:
1. Abra o arquivo [public/app-ads.txt](file:///./public/app-ads.txt).
2. Substitua `pub-XXXXXXXXXXXXXXXX` pela sua ID de Editor da conta Google AdMob.
3. O arquivo ficará acessível automaticamente na raiz do seu domínio em: `https://seu-dominio.com/app-ads.txt`.

---

## 🔍 SEO e Indexação

* **Sitemap Dinâmico:** Gerado automaticamente em `/sitemap.xml` através do arquivo [src/app/sitemap.ts](file:///./src/app/sitemap.ts).
* **Robots.txt:** Configurado dinamicamente no arquivo [src/app/robots.ts](file:///./src/app/robots.ts) apontando para o sitemap.
* **JSON-LD (Structured Data):** Configurado no [layout.tsx](file:///./src/app/layout.tsx) com as tags `SoftwareApplication` para que o Google exiba ricos detalhes do aplicativo (avaliações, preço) diretamente nos resultados de busca.
