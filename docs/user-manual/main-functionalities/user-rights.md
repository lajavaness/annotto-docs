v---
sidebar_position: 3

---

# User rights

Permissions are set at **project** and **platform** levels.

- **Platform level permissions** define whether a user can create a project and which projects they can see/access. They are defined by profile objects mapping email and role, stored in the Profile DB collection. In a new deployment, this collection already contains seeds for administrators and dataScientist emails. If a user requests a resource providing authentication via JWT and does not have an existing profile, a "user" profile is created.

- **Project-level permissions** are defined by the project's optional configuration fields: users, dataScientists, administrators which are an email list.

- Both levels of authorizations are checked by the **_isAuthenticated_** middleware on each request.

- Admins can update other users' profiles

- **Platform roles** and **project roles** do not have to correspond (a simple user on the platform, can be a projectDatascientist or even a projectAdmin)

1. **Platform Level Permissions**:

- **_admin_**: has no restrictions : sees all projects and can administer them without being included in project email groups (users, dataScientists, admins)

- **_dataScientist_**: can create projects, sees an accesses projects with his e-mail belonging to a group of users

- **_user_**: cannot create projects, sees and accesses projects with his e-mail belonging to a group of users

2. **Project Level Permissions**:

- **_projectAdmin_**: has no restriction on project administration

- **_projectDatascientist_**: has some restrictions on project administration (can export/get project config, can't upload config or archive project)

- **_projectUser_**: does not have access to the project administration
