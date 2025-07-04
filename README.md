# telegram-api-proxy
Proxy telegram bot api request, change the domain api.telegram.com in your URL to yourself domain (For example : tgapi.abc.com ).
## How to do
1. Create cloudflare worker
2. Paste the code in worker.js
3. Deploy the workers
4. Add your custom domain (tgapi.abc.com) to your workers
5. Use telegram RESTFul API only change the api.telegram.com to your domain
