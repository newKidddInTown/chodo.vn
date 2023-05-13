import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  ghostEnable: any;

  toggleGhost() {
    this.ghostEnable = !this.ghostEnable;
  }
  styleButtonBaby() {
    return this.ghostEnable ?
      // style if ghost is enabled
      {
        "backgroundColor" : "yellow",
        "border" : "1px solid white"
      }:
      // style if ghost is disabled
      {
        "backgroundColor" : "green",
        "border" : "1px solid white",
        "color" : "white"
      }
  }
}
