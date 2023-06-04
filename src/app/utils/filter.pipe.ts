import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Pipe({
  name: 'productfilter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {

    console.log("Called Transform Method");

    const searchText = args[0];
    return value.filter((product: Product)=>{
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
