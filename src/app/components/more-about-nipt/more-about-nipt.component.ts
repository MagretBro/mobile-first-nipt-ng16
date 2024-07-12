import { Component } from '@angular/core';

@Component({
  selector: 'app-more-about-nipt',
  templateUrl: './more-about-nipt.component.html',
  styleUrls: ['./more-about-nipt.component.scss']
})
export class MoreAboutNiptComponent {
  activeBtn: string = 'WHAT is NIPT';

  setActiveBtn(button: string) {
    this.activeBtn = button;
  }

  isActive(button: string): boolean {
    return this.activeBtn === button;
  }
}
