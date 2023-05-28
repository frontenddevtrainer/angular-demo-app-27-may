import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latestProducts = [{
    "id": 1,
    "name": "Potatoes - Yukon Gold, 80 Ct",
    "price": 20,
    "description": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
    "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff"
  }, {
    "id": 2,
    "name": "Squash - Pattypan, Yellow",
    "price": 12,
    "description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 3,
    "name": "Chicken - Bones",
    "price": 46,
    "description": "nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 4,
    "name": "Butter Ripple - Phillips",
    "price": 63,
    "description": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
    "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff"
  }, {
    "id": 5,
    "name": "Cocoa Powder - Dutched",
    "price": 94,
    "description": "sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 6,
    "name": "Parsley - Fresh",
    "price": 78,
    "description": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
    "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff"
  }, {
    "id": 7,
    "name": "Butter Ripple - Phillips",
    "price": 95,
    "description": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 8,
    "name": "Wine - Periguita Fonseca",
    "price": 23,
    "description": "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 9,
    "name": "Chicken Breast Wing On",
    "price": 58,
    "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 10,
    "name": "Cookie - Dough Variety",
    "price": 30,
    "description": "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
    "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff"
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
