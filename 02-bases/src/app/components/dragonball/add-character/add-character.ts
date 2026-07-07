import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character',
  templateUrl: './add-character.html',
})
export class AddCharacter {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);

    this.newCharacter.emit(newCharacter);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
