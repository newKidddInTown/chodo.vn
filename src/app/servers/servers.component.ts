import {Component} from '@angular/core';
import {Server} from "./server";
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  servers: Array<Server> = [];

  constructor(private loadingBar: LoadingBarService) {
  }

  addServer(event : any) {
    this.loadingBar.start();
    setTimeout(() => {
      this.servers.push(new Server());
      this.loadingBar.stop();
    }, 1000);
  }

  removeServer() {
    this.loadingBar.start();
    setTimeout(() => {
      this.servers.pop();
      this.loadingBar.stop();
    }, 1000);
  }

  onCheckInputEvent( $event : Event) {
    console.log($event)
  }
}
