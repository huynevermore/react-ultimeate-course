# React
- first render
- next render/re-render: -> update state -> render UI
- library
  - small library
  - free style
  - react -> write jsx -> render UI
  - react-router -> navigate page
- framework
  - build exist frame
  - angular


## How many way component re-render?
- props change
- state change
- component parent re-render
- key change (force update)

## CDN
- content delivery network
- share việc load resource with server của mình
- caching resource loaded

Ex: 
install tailwind
yarn run build -> bundle js + tailwind (100kb)
web load -> load resource

// cdn
cdn -> server cdn load tailwind
server mình -> load bundle js (50kb)
web load 
 - bundlejs -> server mình
 - tailwind -> cdn load


/* -> redirect index.html

## Authenticate -> xác thực
user login -> go to system

## Authorize -> phân quyền
operator
member -> view 
admin ->  view, create, edit, delete
- FE
  - by page
     - create product: admin, operator
     - list product: admin, operator, member
     - edit product: admin, operator
     - salary: admin
  - by action 
    - button Create: admin, operator
    - button Delete: admin
- BE CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)
  - GET /api/product/list -> access_token -> all role -> can
  - POST /api/product/create -> access_token -> admin, operator -> can