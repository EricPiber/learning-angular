import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, AddCharacter],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
