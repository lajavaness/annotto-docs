# Création d'un projet type : NER et classification

Depuis le header, je clique sur **_Create new project_**.

![Screenshot 1-1](../../../assets/screenshot-1-1.png)

### 1/ Étape Project

On renseigne les champs obligatoires :

- **_Client_**
- **_Project type_**
- **_Project name_**
- **_Project deadline_**
- **_Project description_**

Les champs non obligatoires :

- **_Default markers_** : apparaît sur l’item plus tard
- **_to delete_** : indique un item à supprimer
- **_to check_** : indique un item à vérifier
- **_to discuss_**: indique un item à discuter

On peut définir des niveaux d’accès à l’item importé à :

- **_l’admin_**
- **_le data scientist_**
- **_l’utilisateur_**

![Screenshot 1-2](../../../assets/screenshot-1-2.png)

### 2/ Étape Files

![Screenshot 1-3](../../../assets/screenshot-1-3.png)

les champs :

- **_Config file_**: fichier de config
- **_Annotations file_**: fichier contenant les annotations liées à l’item
- **_Predictions file_**: fichier contenant les predictions liées à l’item

Contrairement aux annotations, les prédictions viennent d’un modèle pré-entraîné. Après l’import, on pourra choisir de les garder ou non.

Quant au champ obligatoire :

- **_item file_** : c’est une liste qu’il faut préparer à l’avance comprenant le type de l’item et une id unique

### 3/ Étape Labeling

On va définir ce qu’on veut faire avec notre projet.

- **_Task Title_** : définit le nom
- **_Task Type_** : définit le type

![Screenshot 1-4](../../../assets/screenshot-1-4.png)

On peut ajouter un nouveau label en cliquant sur **_Add a new label_**.

Les champs :

- **_Label Code_** : doit être unique
- **_Label Name_** : ne doit pas forcement porter le même nom que Label Code
- **_Color_** : définit la couleur du label
- **_Hotkey_** : permet de créer un raccourci clavier
- **_Label Description_** : une description du label

![Screenshot 1-5](../../../assets/screenshot-1-5.png)

:::caution
Une fois ces labels définis, il n’est plus possible de les modifiers par la suite.
:::

### 4/ Étape Annotation Guide

On peut ici définir des règles d’annotations.

Une fois les spécifications d’un projet renseignées, on peut cliquer sur **_Add a new task_** pour commencer à renseigner les détails d'un autre projet.

![Screenshot 1-6](../../../assets/screenshot-1-6.png)

_exemple d'un fichier de config_

```json
{
  "tasks": [],
  "name": "DEMO: NER and Classification text",
  "client": "LJN",
  "type": "text",
  "highlights": [],
  "description": "Demo NER and Classification",
  "admins": ["admin@test.com"],
  "users": ["user@test.com"],
  "dataScientists": ["data@test.com"],
  "defaultTags": [],
  "showPredictions": true,
  "prefillPredictions": true,
  "filterPredictionsMinimum": 0.4,
  "deadline": "2023-04-30T13:57:20.355Z",
  "entitiesRelationsGroup": []
}
```

_exemple d'un fichier d'items_

```json
{"predictions":{"raw":{"Sentiment":{"labels":[{"value":"pos","proba":0.999}]},"Entities 1":{"entities":[{"value":"name","start":23,"end":33}]}},"keys":[{"value":"pos","proba":0.999},{"value":"name","start":23,"end":33}]},"uuid":"76030ac8-6d2d-40ab-a497-4aa6a1404446","data":{"text":"Bonjour, je souhaite pouvoir changer mes heures creuse heure pleine"},"type":"text","metadata":{},"description":"","annotated":true,"annotatedBy":["userProfile-42@lajavaness.com"],"createdAt":1658755620546,"velocity":102,"lastAnnotator":{"email":"userProfile-42@lajavaness.com"},"annotatedAt":"2020-11-16T14:17:09.627Z","seenAt":"2022-11-18T09:15:06.634Z"}
{"predictions":{},"uuid":"41ee6af9-078f-4ad9-8bec-6fe1b8871c08","data":{"text":"Je suis en discussion en ce moment avec @E ..."},"type":"text","metadata":{},"description":"","annotated":false,"createdAt":1658755620546,"velocity":null,"lastAnnotator":{},"seenAt":"2022-11-21T07:31:08.874Z"}
{"predictions":{},"uuid":"e0870093-180d-46ac-9dd8-2e4b9661025f","data":{"text":"Bonjour j'aimerai demander des informations concernant une regularisation suite à un changement de compteur"},"type":"text","metadata":{},"description":"","annotated":true,"annotatedBy":["userProfile-42@lajavaness.com"],"createdAt":1658755620546,"velocity":19,"lastAnnotator":{"email":"userProfile-42@lajavaness.com"},"annotatedAt":"2020-11-16T14:15:27.927Z","seenAt":"2022-11-21T07:31:06.480Z"}
{"predictions":{},"uuid":"7caffcc4-ee3d-41ce-9d7e-32fe7c99b064","data":{"text":"Bonjour @E maintenant que je dispose d'un beau compteur communiquant, pouvez-vous m'indiquer les démarches à suivres pour consulter ma consommation en \"direct\" ?"},"type":"text","metadata":{},"description":"","annotated":true,"annotatedBy":["userProfile-42@lajavaness.com"],"createdAt":1658755620546,"velocity":123,"lastAnnotator":{"email":"userProfile-42@lajavaness.com"},"annotatedAt":"2020-11-16T14:15:08.057Z","seenAt":"2022-11-21T07:31:03.042Z"}
```
