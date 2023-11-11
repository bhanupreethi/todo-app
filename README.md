Task: Create a simple Todo-App in either React (web) or React Native.

Features:
Load and show todos as a list from an API (that we provide)
Show a text input to create new todos (and store them via API)
Mark Items as complete
Optional: Delete items
Optional: Filter or search items in a sensible way

Objectives:
Show your understanding of building simple frontends and web forms
Connect a React (Native) app and APIs
Showcase your design skills
Showcase your understanding of the rest APIs

Furthermore:
Use any UI Library of your choice (for the Text, Buttons, Inputs, etc.)
https://mantine.dev/ for React (web)
https://reactnativepaper.com/ for React Native

Regarding the API:

The API is located at https://api.staging.sumize.io/api/todos

You can add, update, and delete items in a restful manner.

GET https://api.staging.sumize.io/api/todos (to list todos)
POST https://api.staging.sumize.io/api/todos (to create new ones)
PATCH https://api.staging.sumize.io/api/todos/:id (to update existing ones)
DELETE https://api.staging.sumize.io/api/todos/:id (to delete existing ones)

You can also filter, search, and sort the list (GET) endpoint. Ex: GET https://api.staging.sumize.io/api/todos?filters[done]=false

As the API provides extensive errors you should be able to find out which data you must post to create new items.

Please refer to this documentation on how to filter, sort, and search (the todo API): https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication
