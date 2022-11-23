---
sidebar_position: 1
---

# Account creation and roles assignment

This document lists everything you need to know in order to create an account and assign it a role.

## Account creation

To create an account, it is necessary to go through keycloak. Below is a step-by-step description for account creation:

1. Go to the Keycloak console by following this url: http://localhost:8080/auth

2. Click on “Administration Console”

3. Log in as an admin.

You will be redirected to this page:

![Screenshot 1](./assets/screenshot-1.png)

4. Click on “Users” from the sidebar. By clicking on “View all users” you have access to all existing users.

5. Click on “Add user” at the top right

6. Fill in the fields with the information of the user you want to create

7. Click on “Save”

8. Then go to the “Credentials” tab to give it a temporary password or not (depending on the toggle)

9. Enter the password you want to assign to it then click on “Set Password”

:::note
At this stage your user is created but has yet to be assigned a role.
:::

## Role assignment

Following the user's creation, here are the steps to assign a role:

1. Go to the “RoleMapping” tab of the “Users” page in keycloak

![Screenshot 2](./assets/screenshot-2.png)

2. Click on “Client Roles” to find the roles that can be assigned

3. Choose the client, for example here we chose “annotto”

![Screenshot 3](./assets/screenshot-3.png)

6. The roles available for the chosen client are displayed in the “Available roles” section

7. Click on the role you want to assign and click on “Add selected”

:::info
IMPORTANT : It is possible to assign multiple roles. If you choose to assign several roles to the user, he will have the union of rights assigned to each role.
:::
