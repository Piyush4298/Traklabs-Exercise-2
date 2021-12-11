import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './oidc.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Exercise2';

  constructor(private oauthService: OAuthService){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  get token(){
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

  onLogOut(){
    this.oauthService.logOut();
  }
}
