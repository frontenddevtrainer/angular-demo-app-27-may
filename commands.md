### Create new module as Utils and import in App module
#### ng generate module utils --module=app

### Create new component as Product Listing in Utils module.
#### ng generate component products-listing --module=utils

### Create new component in Utils module.
#### ng generate component utils/products-listing --module=utils
#### ng generate component MODULE_NAME/COMPONENT_NAME --module=MODULE_NAME

### Create products service
#### ng generate service services/products