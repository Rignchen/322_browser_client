# Passer Simple

Ce projet est composé de

- **Frontend** : Angular app (interface utilisateur)
- **Backend** : Serveur JSON simulant une API REST pour les données de marche

---

## Prérequis

Assurez-vous d'avoir installé :

- [Node.js (version recommandée ≥ 16.x)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) :
  ```bash
  npm install -g @angular/cli
  ```

---

##  Dépôts GitHub

- Frontend : [https://github.com/Rignchen/322_browser_client](https://github.com/Rignchen/322_browser_client)
- Backend : [https://github.com/Rignchen/322_browser_server](https://github.com/Rignchen/322_browser_server)

---

## Structure du projet

```
 client       ← Frontend Angular
 server       ← Backend JSON Server (fake API)
```

---

## Installation Backend (json-server)

### 1. Ouvrir un terminal et se déplacer dans le dossier :

```bash
cd 322_browser/server
```

### 2. Installer les dépendances :

```bash
npm install
```

### 3. Lancer le serveur :

```bash
npm start
```

Le backend sera accessible sur :  
[http://localhost:3000](http://localhost:3000)

### Endpoints disponibles :

- `GET /walks` – Liste de toutes les promenades
- `GET /walks/1` – Détails d'une promenade

---

## Installation Frontend (Angular)

### 1. Ouvrir un **nouveau terminal** et se déplacer dans le dossier :

```bash
cd 322_browser/client
```

### 2. Installer les dépendances :

```bash
npm install
```

### 3. Configurer l’environnement :

```bash
cp src/types/.env.example.ts src/types/.env.ts
```

Puis éditer `src/types/env.ts` avec le contenu suivant :

```ts
export default class {
  public static API_URL: string = 'http://localhost:3000';
  public static GMAP_API_KEY: string = 'YOUR_GMAP_API_KEY';
}
```

### 4. Lancer le serveur Angular :

```bash
ng serve
```

Le frontend sera disponible sur :  
[http://localhost:4200](http://localhost:4200)

---

## Résumé

| Composant | Commande    | URL                   |
| --------- | ----------- | --------------------- |
| Backend   | `npm start` | http://localhost:3000 |
| Frontend  | `ng serve`  | http://localhost:4200 |

---

## Ressources utiles

- [Angular CLI Documentation](https://angular.io/cli)
- [json-server GitHub](https://github.com/typicode/json-server)
- [Créer une clé API Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)
