# FULLSTACK CRM CHEATSHEET (BEGINNER EDITION)

The goal is NOT to memorize everything.

The goal is:

* Recognize what you're seeing
* Know what to Google
* Understand the code you're writing

---

# 1. HTML

HTML = Structure

Think of HTML as the skeleton of a webpage.

Example:

```html
<h1>My CRM</h1>

<p>Welcome Dad</p>

<button>Add Prospect</button>
```

Result:

My CRM
Welcome Dad
[Add Prospect]

---

## Common Tags

### Headings

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

---

### Paragraph

```html
<p>This is a paragraph.</p>
```

---

### Button

```html
<button>Save</button>
```

---

### Input

```html
<input type="text" />
```

---

### Text Area

```html
<textarea></textarea>
```

Useful for notes.

---

### Link

```html
<a href="https://google.com">
  Open Google
</a>
```

---

### Image

```html
<img src="image.jpg" />
```

---

### Container

```html
<div>
  Content here
</div>
```

Most used HTML element.

Think:

"box"

---

## Forms

Very important.

```html
<form>

  <input
    type="text"
    placeholder="Name"
  />

  <button>
    Save
  </button>

</form>
```

You'll use forms constantly.

---

# 2. CSS

CSS = Appearance

Changes:

* colors
* sizes
* spacing
* layout

Example:

```css
button {
  background: blue;
  color: white;
}
```

---

## Margin

Outside spacing

```css
margin: 20px;
```

---

## Padding

Inside spacing

```css
padding: 20px;
```

---

## Width

```css
width: 300px;
```

---

## Height

```css
height: 100px;
```

---

## Flexbox

Most important CSS concept.

```css
display: flex;
```

Example:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

Useful for:

* navbars
* cards
* dashboards

---

# 3. JAVASCRIPT

JavaScript = Behavior

Makes things happen.

---

## Variables

```js
let name = "John";

const age = 25;
```

Rule:

```js
const
```

by default.

Use:

```js
let
```

when value changes.

---

## Arrays

List of values.

```js
const prospects = [
  "John",
  "Mary",
  "Alex"
];
```

Access:

```js
prospects[0]
```

Result:

```js
John
```

---

## Objects

Most important structure.

```js
const prospect = {
  name: "John",
  phone: "123456",
  status: "Interested"
};
```

Access:

```js
prospect.name
```

Result:

```js
John
```

---

## Functions

Reusable code.

```js
function greet() {
  console.log("Hello");
}
```

Run:

```js
greet();
```

---

## Function With Parameters

```js
function greet(name) {
  console.log(name);
}
```

Run:

```js
greet("John");
```

---

## If Statements

```js
if (status === "Closed") {
  console.log("Deal won");
}
```

---

## Loops

```js
for (let i = 0; i < prospects.length; i++) {
  console.log(prospects[i]);
}
```

---

## Array Map

Used constantly in React.

```js
prospects.map(prospect => {
  console.log(prospect);
});
```

---

## Fetch Data

```js
fetch("http://localhost:3000/prospects")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

Gets data from backend.

---

## Async Await

Modern version.

```js
async function getProspects() {

  const response =
    await fetch("/prospects");

  const data =
    await response.json();

  console.log(data);
}
```

You will see this everywhere.

---

# 4. REACT

React = JavaScript + UI

Instead of manually updating HTML:

```js
document.getElementById(...)
```

React updates UI automatically.

---

## Component

React is made of components.

```jsx
function Dashboard() {

  return (
    <h1>CRM Dashboard</h1>
  );

}
```

---

## Rendering

```jsx
<Dashboard />
```

---

## Props

Pass data.

```jsx
function Prospect(props) {

  return (
    <h1>{props.name}</h1>
  );

}
```

Use:

```jsx
<Prospect
  name="John"
/>
```

---

## State

Stores changing data.

```jsx
const [count, setCount] =
  useState(0);
```

Update:

```jsx
setCount(1);
```

---

## useState Example

```jsx
function Counter() {

  const [count, setCount] =
    useState(0);

  return (
    <>
      <p>{count}</p>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Add
      </button>
    </>
  );

}
```

---

## Event Handling

```jsx
<button
  onClick={saveProspect}
>
  Save
</button>
```

---

## Input State

Most common pattern.

```jsx
const [name, setName] =
  useState("");
```

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

---

## Rendering Lists

You will use this daily.

```jsx
{prospects.map(prospect => (

  <p>
    {prospect.name}
  </p>

))}
```

---

## Conditional Rendering

```jsx
{isLoading && (
  <p>Loading...</p>
)}
```

---

## useEffect

Runs code automatically.

```jsx
useEffect(() => {

  getProspects();

}, []);
```

Meaning:

"Run once when page loads"

---

# 5. API

Frontend talks to backend.

Example:

Frontend:

```js
fetch("/prospects")
```

↓

Backend:

```js
app.get("/prospects")
```

↓

Database

---

# 6. EXPRESS

Node backend framework.

---

## Basic Server

```js
const express =
  require("express");

const app = express();

app.listen(3000);
```

---

## GET

Read data.

```js
app.get("/prospects",
(req,res) => {

  res.send("Prospects");

});
```

---

## POST

Create data.

```js
app.post("/prospects",
(req,res) => {

  res.send("Created");

});
```

---

## PUT

Update data.

```js
app.put("/prospects/:id",
(req,res) => {

});
```

---

## DELETE

Delete data.

```js
app.delete("/prospects/:id",
(req,res) => {

});
```

---

# 7. DATABASE

Think Excel table.

Prospects:

| id | name | status |
| -- | ---- | ------ |
| 1  | John | New    |
| 2  | Mary | Closed |

---

## SQL

Get all prospects:

```sql
SELECT *
FROM prospects;
```

---

Insert prospect:

```sql
INSERT INTO prospects
(name,status)

VALUES

('John','New');
```

---

Update prospect:

```sql
UPDATE prospects

SET status='Closed'

WHERE id=1;
```

---

Delete prospect:

```sql
DELETE FROM prospects

WHERE id=1;
```

---

# 8. PRISMA

Prisma talks to database.

Instead of:

```sql
SELECT *
FROM prospects;
```

You write:

```js
await prisma.prospect.findMany();
```

---

Create:

```js
await prisma.prospect.create({
  data: {
    name: "John"
  }
});
```

---

# 9. PROJECT VOCABULARY

# Frontend

What user sees

# Backend

Server logic

# API

Communication layer

# Database

Stores data

# CRUD

Create
Read
Update
Delete

# Endpoint

URL in backend

# Component

Reusable React block

# State

Changing data

# Prop

Data passed to component

# ORM

Database helper (Prisma)

# Deployment

Putting app online

---

# 10. THE ONLY FLOW YOU NEED TO UNDERSTAND

Dad clicks:

"Add Prospect"

↓

React Form

↓

fetch()

↓

Express API

↓

Prisma

↓

PostgreSQL

↓

Prospect Saved

↓

React Reloads List

↓

Dad Sees New Prospect

If you understand this flow, you understand 80% of the CRM.
