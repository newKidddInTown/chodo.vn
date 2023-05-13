import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  serverCount : Array<number> = [];

  addServer() {
    this.serverCount.push(1)
  }

  removeServer() {
    this.serverCount.pop()
  }
}
