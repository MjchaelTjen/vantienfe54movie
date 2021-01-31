import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: string, limit = 30): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
