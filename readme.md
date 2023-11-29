# Task CRUD API

> Backend API for Task manager application

## Usage

Rename "config.env.env" to ".env" and update the values/settings using your credentials

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run start


```

## Database Seeder

To seed the database with Tasks data from the "/data" folder, run

```
# Destroy all data
npm run data:destroy -d

# Import all data
npm run data:import -i
```

# Task Schema

The `Task` schema includes the following fields:

- `title`: The title of the task. (String, required, max length: 20 characters)
- `description`: The description of the task. (String, required)
- `status`: The status of the task, which can be one of: 'Pending', 'In Progress', 'Done'. (String, default: 'Pending')
- `due_date`: The due date of the task. (string, required)

### Validation Rules

- `title`: Must be provided, must not exceed 20 characters.
- `description`: Must be provided , must be below 250 characters.
- `due_date`: Must be provided.

## Base URL

The base URL for accessing the API endpoints is `http://your-base-url.com/`.

Please prepend this base URL to all endpoint paths mentioned below.

## Endpoints

### Get All Tasks

```http
GET /api/tasks
```

#### Demo Response

```json
{
    "total": 4,
    "data": [
        {
            "_id": "6567592bd4d669bb2770e1de",
            "title": "Task 2 - two",
            "description": "must do this",
            "status": "In Progress",
            "due_date": "30-11-2023",
            "createdAt": "2023-11-29T15:30:51.596Z",
            "updatedAt": "2023-11-29T15:30:51.596Z",
            "__v": 0
        },
        ...
    ]
}
```

### Get a Single Task By ID

```http
GET /api/tasks/:id
```

#### Demo Response

```json
{
  "_id": "6566081b40a25834ba1586d3",
  "title": "Task 2",
  "description": "This is the second task.",
  "status": "In Progress",
  "due_date": "Tue Dec 05 2023 06:00:00 GMT+0600 (Bangladesh Standard Time)",
  "__v": 0,
  "createdAt": "2023-11-28T15:32:43.793Z",
  "updatedAt": "2023-11-28T15:32:43.793Z"
}
```

### Create a New Task

```http
POST /api/tasks
```

#### Demo Request Body

```json
{
  "title": "Task featured completed. ",
  "description": "This is a demo description .....",
  "due_date": "11/29/2023",
  "status": "Pending"
}
```

### Update a Task

```http
PUT /api/tasks/:id
```

#### Demo Response

```json
{
  "success": true,
  "data": {
    "_id": "6567573c1a34faa573366da2",
    "title": "to do nai nibo na",
    "description": "must do this",
    "status": "In Progress",
    "due_date": "30-11-2023",
    "createdAt": "2023-11-29T15:22:36.916Z",
    "updatedAt": "2023-11-29T16:19:00.605Z",
    "__v": 0
  }
}
```

### Delete a Task

```http
DELETE /api/tasks/:id
```

### Demo Response

```json
{
  "message": "Product removed"
}
```
