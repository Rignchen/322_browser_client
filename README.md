#  Passé Simple – Fullstack App Installation Guide

This project is composed of:
-  **Frontend**: Angular app (user interface)
-  **Backend**: JSON Server simulating a REST API for walk data

---

##  Prérequis

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

##  Structure du projet

```
322_browser_client-main       ← Frontend Angular
322_browser_server-main       ← Backend JSON Server 
```

---

##  Installation Backend (json-server)

### 1. Ouvrir un terminal et se déplacer dans le dossier :
```bash
cd 322_browser_server-main/322_browser_server-main
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

###  Endpoints disponibles :
- `GET /walks` – Liste de toutes les promenades
- `GET /walks/1` – Détails d'une promenade

---

##  Installation Frontend (Angular)

### 1. Ouvrir un **nouveau terminal** et se déplacer dans le dossier :
```bash
cd 322_browser_client-main/322_browser_client-main
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
export default class = {
  apiUrl: 'http://localhost:3000',
  googleMapsApiKey: 'VOTRE_CLÉ_API_ICI'
};

export default env;
```

> **Google Maps API** : Ce projet utilise Google Maps pour l'affichage des cartes.  
> Rendez-vous sur [console.cloud.google.com](https://console.cloud.google.com/) pour générer une clé d'API Google Maps.

### 4. Lancer le serveur Angular :
```bash
ng serve
```

Le frontend sera disponible sur :  
[http://localhost:4200](http://localhost:4200)

---

##  Résumé

| Composant  | Commande                     | URL                            |
|------------|------------------------------|--------------------------------|
| Backend    | `npm start`                  | http://localhost:3000          |
| Frontend   | `ng serve`                   | http://localhost:4200          |

---

##  Critères d'acceptation (user story #33)

- [x] Instructions claires et compréhensibles
- [x] Le fichier est complet et chaque étape est documentée
- [x] L’utilisateur peut installer et tester sans difficulté

---

##  Ressources utiles

- [Angular CLI Documentation](https://angular.io/cli)
- [json-server GitHub](https://github.com/typicode/json-server)
- [Créer une clé API Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)
