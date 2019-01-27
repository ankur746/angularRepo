import { Component } from '@angular/core';

@Component({
 selector : 'app-server',
 templateUrl : './server.component.html' 
})

export class ServerComponent {
allowNewServer = false;    
serverId= 10; serverStatus:string = 'String for DataBinding'
serverName;serverCreatedStatus:boolean=true;
constructor() {
setTimeout(() => {
    this.allowNewServer =true;
}, 2000)
}


getStringMethod() {
return this.serverStatus;
}

onUpdateEvent(event:Event) {
    
    this.serverName = (<HTMLInputElement>event.target).value;

}

createServer(){
    this.serverCreatedStatus=true;
}

}