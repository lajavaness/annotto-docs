---
sidebar_position: 2
---

# Droits des utilisateurs

Les autorisations sont définies au niveau du **projet** et au niveau de la **plateforme**.

- **Les autorisations au niveau de la plate-forme** définissent si un utilisateur peut créer un projet et à quels projets il voit / peut accéder. Ils sont définis par des objets de profil mappant un e-mail et un rôle, stockés dans la collection Profile DB. Lors d'un nouveau déploiement, cette collection contient déjà des graines pour les administrateurs et les e-mails dataScientist. Si un utilisateur demande une ressource fournissant une authentification via JWT et qu'il n'a pas de profil existant, un profil "utilisateur" est créé.

- **Les autorisations au niveau du projet** sont définies par les champs de configuration facultatifs du projet : utilisateurs, dataScientists, administrateurs qui sont une liste d'e-mails.

Les deux niveaux d'autorisations sont vérifiés par le middleware **_isAuthenticated_** à chaque demande

Les administrateurs peuvent mettre à jour les profils d'autres utilisateurs

Les **rôles de plate-forme** et les **rôles de projet** ne doivent pas nécessairement correspondre (un simple utilisateur sur la plate-forme, peut être un projectDatascientist ou même un projectAdmin)

1. **Autorisations au niveau de la plateforme** :

- **_admin_** : n'a aucune restriction, dépasse les autorisations du projet rôles : voit tous les projets et peut les administrer sans être inclus dans les groupes d'e-mails du projet (utilisateurs, dataScientists, admins)

- **_dataScientist_** : peut créer des projets, voit et peut accéder à des projets avec son e-mail est dans un groupe d'utilisateurs

- **_utilisateur_** : ne peut pas créer de projets, voit et peut accéder aux projets avec son e-mail appartient à un groupe d'utilisateurs

2. **Autorisations au niveau du projet** :

- **_projectAdmin_** : n'a aucune restriction sur l'administration du projet

- **_projectDatascientist_** : a certaines restrictions sur l'administration du projet (peut exporter/obtenir la configuration du projet, ne peut pas mettre la configuration ou archiver le projet)

- **_projectUser_** : n'a pas accès à l'administration du projet
