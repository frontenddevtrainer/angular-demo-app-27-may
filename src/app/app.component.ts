import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latestProducts = [{
    "id": 1,
    "name": "Latex Rubber Gloves Size 9",
    "price": 69,
    "description": "ornare consequat lectus in est risus auctor sed tristique in tempus sit"
  }, {
    "id": 2,
    "name": "Onions - White",
    "price": 69,
    "description": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in"
  }, {
    "id": 3,
    "name": "Onions - Dried, Chopped",
    "price": 67,
    "description": "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat"
  }, {
    "id": 4,
    "name": "Tart Shells - Barquettes, Savory",
    "price": 33,
    "description": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula"
  }, {
    "id": 5,
    "name": "Muffin Mix - Blueberry",
    "price": 14,
    "description": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum"
  }, {
    "id": 6,
    "name": "Lamb Rack Frenched Australian",
    "price": 22,
    "description": "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien"
  }, {
    "id": 7,
    "name": "Oil - Avocado",
    "price": 42,
    "description": "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero"
  }, {
    "id": 8,
    "name": "Roe - White Fish",
    "price": 69,
    "description": "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"
  }, {
    "id": 9,
    "name": "Chivas Regal - 12 Year Old",
    "price": 88,
    "description": "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
  }, {
    "id": 10,
    "name": "Cheese - St. Andre",
    "price": 13,
    "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus"
  }]

  topProducts = [{
    "id": 1,
    "name": "Wine - Shiraz Wolf Blass Premium",
    "price": 88,
    "description": "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante"
  }, {
    "id": 2,
    "name": "Pasta - Linguini, Dry",
    "price": 77,
    "description": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam"
  }, {
    "id": 3,
    "name": "Beets",
    "price": 45,
    "description": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend"
  }, {
    "id": 4,
    "name": "Chocolate - Chips Compound",
    "price": 38,
    "description": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate"
  }, {
    "id": 5,
    "name": "Oil - Shortening - All - Purpose",
    "price": 97,
    "description": "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"
  }, {
    "id": 6,
    "name": "Beer - Mcauslan Apricot",
    "price": 36,
    "description": "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus"
  }, {
    "id": 7,
    "name": "Lettuce - Lambs Mash",
    "price": 7,
    "description": "vivamus in felis eu sapien cursus vestibulum proin eu mi"
  }, {
    "id": 8,
    "name": "Hummus - Spread",
    "price": 95,
    "description": "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes"
  }, {
    "id": 9,
    "name": "Corn - On The Cob",
    "price": 39,
    "description": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam"
  }, {
    "id": 10,
    "name": "Water Chestnut - Canned",
    "price": 93,
    "description": "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit"
  }]

}
