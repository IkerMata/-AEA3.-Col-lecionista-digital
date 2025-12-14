# 🛰️ El Col·leccionista Digital

Aquest repositori conté **dos projectes** del treball *El Col·leccionista Funcional*, desenvolupats amb **Vue 3** i **Nuxt 3**, cadascun en la seva pròpia branca.

---

## 🌿 Branques del repositori

- **vite** → Aplicació SPA feta amb **Vue 3 + Vite**
- **nuxt** → Aplicació feta amb **Nuxt 3** utilitzant **SSR**

Per canviar de projecte:

```bash
git checkout vite
# o bé
git checkout nuxt
```
## 🔧 Requisits previs

Abans d'executar qualsevol projecte cal tenir instal·lat:

- **Node.js** (versió recomanada: >= 18)  
- **npm** (inclòs amb Node.js)  
- **Git**  

Comprovar versions:

```bash
node -v
npm -v
git --version
```

## 🚀 Projecte Vue 3 + Vite (branca `vite`)

### 1️⃣ Canviar a la branca

```bash
git checkout vite
```

## 🚀 Projecte Vue 3 + Vite (branca `vite`)

### 2️⃣ Instal·lar dependències

```bash
npm install
```

### 3️⃣ Dependències principals

- vue  
- vue-router  
- axios  
- pinia  

(Totes definides al `package.json`)

### 4️⃣ Variables d'entorn

Crear un fitxer **.env** a l'arrel del projecte:

```env
VITE_API_KEY=la_teva_api_key
```

### 5️⃣ Executar el projecte (Vite)

```bash
npm run dev
```

📍 L'aplicació estarà disponible a:  
👉 http://localhost:5173

---

## 🌐 Projecte Nuxt 3 (branca `nuxt`)

### 1️⃣ Canviar a la branca

```bash
git checkout nuxt
````
### 2️⃣ Instal·lar dependències

```bash
npm install
```

### 3️⃣ Configuració d'entorn

Les variables d'entorn es defineixen a `nuxt.config.ts` mitjançant `runtimeConfig`:

```ts
runtimeConfig: {
  public: {
    apiBase: "https://www.themealdb.com/api/json/v1/1"
  }
}
```

### 4️⃣ Executar el projecte

```bash
npm run dev
````

📍 L'aplicació estarà disponible a:
👉 http://localhost:3000
