# Aprenentatges Oberts: Flux

Implementació del patró flux. Implementació amb vanilla.js del patró flux simplificat i vinculat a un UI per replicar la lògica dels components de react com a dumb components.

## Instal·lació i engegada

El repositori és un paquet de NPM. Per tenir les dependències instal·lades i engegar l'entorn de desenvolupament, executa:

```bash
npm install
npm start
```

## L'estructura del directori

El contingut del repositori està organitzat de la següent manera:

```bash
├── dist
│   └── ... # Codi compilat per webpack. No té cap interés
├── src # El codi de la nostra aplicaci
│   ├── components # Dumb components
│   │   ├── List.js # El component llista de todos. Reb una llista de todos i per cada element de la
│   │   │           # llista, fa un render del component `ListItem.js`
│   │   ├── ListItem.js # Un ítem de la llista de todos. S'encarrega de crear la UI dels todos
│   │   └── Todos.js # Conjunt de títol i llista de todos
│   ├── data
│   │   └── todos.js # Les dades de partida. Conté una llista amb 3 todos
│   ├── store
│   │   ├── dispatcher.js # Conté la definició de l'objecte Dispatcher
│   │   └── index.js # Conté la definició de l'objecte de la Store
│   ├── actions.js # Definició de les accions disponibles a la nostra aplicació
│   ├── App.js # Smart Component. Encarregat de comunicar els components amb la Store.
│   └── index.js # L'arxiu d'entrada a la nostra aplicació: Importa tota la resta d'arxius i els exposa
├── .gitignore # Configuració de git
├── README.md # L'arxiu que estàs llegint. Descripció del repositori
├── package-lock.json # Arxiu generat per NPM al instal·lar les dependències
├── package.json # Configuració i dependències del paquet NPM.
└── webpack.config.js # Configuració de webpack (Bundler basat en node.js que ens permet estructurar el
                      # nostre codi de forma modular)
```
