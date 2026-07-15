import {
  computed,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { environment } from 'src/environments/environment';

const baseImgUrl = environment.baseImgUrl;
const placeholderImg = environment.placeholderImg;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (!value[0]) return placeholderImg;
    if (typeof value === 'string')
      return `${baseImgUrl}/${value}`;
    return `${baseImgUrl}/${value[0]}`;
  }
}
