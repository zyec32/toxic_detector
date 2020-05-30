import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardContent, CardActions, Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FaceitLogo from '../audios/FACEIT_logo_with_caption.webp'


const PageWrapper = styled.div`
    display: grid;

    background-color: #000;

    justify-items: center;
    align-items: center;
`

const CardContentGrid = styled.div`
    display: grid;
    grid-row-gap: 8px;
    width: 320px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: grid;
    justify-items: flex-end;
`

const NewComponent = ({ onChangeLogin, onChangePassword, onLogIn }) => (
  
        <div ui-view className="sso ng-scope"><div className="sso__main-container ng-scope">
            {/* LOADING */}
            {/* ngIf: vm.loading */}
            {/* NOT LOADING, NO ERRORS */}
            {/* ngIf: !vm.loading && vm.paramsSpecified && !vm.error */}<div ng-if="!vm.loading && vm.paramsSpecified && !vm.error" className="ng-scope" style={{}}>
              <div className="sso__logo">
                <a href="https://faceit.com" target="_blank">
                  <img ng-src="widgets/sso/assets/images/FACEIT_logo_with_caption.png" alt="FACEIT Challenge your game" src={FaceitLogo} />
                </a>
              </div>
              {/* Authenticated */}
              {/* ngIf: vm.data.authenticated */}
              {/* Unauthenticated */}
              {/* ngIf: !vm.data.authenticated */}<div ng-if="!vm.data.authenticated" className="ng-scope">
                {/* ngIf: !vm.isSignup */}<div ng-if="!vm.isSignup" className="ng-scope">
                  {/* Login form */}
                  <form className="sso__login ng-untouched ng-not-empty ng-invalid ng-valid-email ng-invalid-recaptcha ng-dirty ng-valid-parse ng-invalid-required" name="login" ng-model="login" ng-submit="vm.authenticate(login)" style={{}}>
                    {/* Two-Factor Auth NOT REQUIRED */}
                    {/* ngIf: !vm.twoFactorAuthRequired */}<div ng-if="!vm.twoFactorAuthRequired" className="ng-scope">
                      {/* Email */}
                      <div className="form-group">
                        <label translate-once="EMAIL-ADDRESS-PLACEHOLDER" className="text-uppercase">Email Address</label>
                        <input type="email" onChange={onChangeLogin} className="form-control ng-touched ng-valid-email ng-dirty ng-empty ng-invalid ng-invalid-required" name="email" id="login_email" ng-model="vm.credentials.email" translate-once-placeholder="EMAIL-ADDRESS-PLACEHOLDER" ng-disabled="vm.data.login.requestPending" required placeholder="Email Address" style={{}} />
                      </div>
                      {/* Password */}
                      <div className="form-group">
                        <label translate-once="PASSWORD" className="text-uppercase">Password</label>
                        <input type="password" onChange={onChangePassword} className="form-control ng-valid-required ng-touched ng-not-empty ng-dirty ng-valid-parse ng-valid" name="password" id="login_password" ng-model="vm.credentials.password" translate-once-placeholder="ENTER-PASSWORD" ng-disabled="vm.data.login.requestPending" required placeholder="Enter password" style={{}} />
                        {/* Forgot password link: leaving invisible, for now */}
                        <p className="clearfix invisible">
                          <a ui-sref="." translate-once="FORGOT-YOUR-PASSWORD" className="btn-link btn-xs pull-right text-lowercase" href="#!">Forgot your password?</a>
                        </p>
                      </div>
                      {/* Hidden inputs */}
                      <input type="hidden" name="response_type" defaultValue="code" autoComplete="off" />
                      <input type="hidden" name="client_id" defaultValue="26cb6a4a-95a1-48bf-968e-5ef38da64bc4" autoComplete="off" />
                      <input type="hidden" name="redirect_popup" defaultValue="false" autoComplete="off" />
                      <input type="hidden" id="csrf_token" name="_csrf" defaultValue="254458f1-52b8-451d-b3b1-a93c257158f2" autoComplete="off" />
                    </div>{/* end ngIf: !vm.twoFactorAuthRequired */}
                    {/* Two-Factor Auth REQUIRED */}
                    {/* ngIf: vm.twoFactorAuthRequired */}
                    {/* Submit button */}
                    <div className="form-group">
                      <div><div className="grecaptcha-badge" data-style="inline" style={{width: '256px', height: '60px', position: 'fixed', visibility: 'hidden', display: 'block', transition: 'right 0.3s ease 0s', bottom: '14px', right: '-186px', boxShadow: 'gray 0px 0px 5px', borderRadius: '2px', overflow: 'hidden'}}><div className="grecaptcha-logo"><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdqOzQUAAAAAEqrrRp7klFOvR_NdDWyKXYIk9Wf&co=aHR0cHM6Ly9jZG4uZmFjZWl0LmNvbTo0NDM.&hl=ru&type=submit&v=HYx6hBAtwYatsD8qzq7tXNTk&theme=dark&size=invisible&badge=inline&cb=57d5mfidb8qr" width={256} height={60} role="presentation" name="a-4p0mckh3id8o" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div><div className="grecaptcha-error" /><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div><button type="submit" className="btn btn-primary btn-block btn-fixed-height g-recaptcha ng-isolate-scope" theme="'dark'" vc-recaptcha key="vm.reCaptcha" data-badge="'inline'" on-create="vm.captchaCreateCallback(widgetId)" on-success="vm.captchaResponseCallback(response, 'authenticate', login)" on-expire="vm.captchaExpireCallback()" ng-disabled="vm.data.login.requestPending">
                        {/* ngIf: !vm.data.login.requestPending */}<strong ng-if="!vm.data.login.requestPending" translate-once="LOGIN" className="ng-scope">Log in</strong>{/* end ngIf: !vm.data.login.requestPending */}
                        {/* ngIf: vm.data.login.requestPending */}
                      </button>
                    </div>
                  </form>
                  {/* Authentication error message */}
                  <div className="sso__error">
                    {/* ngIf: vm.authenticateError || vm.twoFactorAuthError */}
                    {/* Empty span to avoid line flickering when error message is shown / hidden */}
                    {/* ngIf: !(vm.authenticateError || vm.twoFactorAuthError) */}<span ng-if="!(vm.authenticateError || vm.twoFactorAuthError)" className="ng-scope">&nbsp;</span>{/* end ngIf: !(vm.authenticateError || vm.twoFactorAuthError) */}
                  </div>
                  {/* Sign up link */}
                  {/* ngIf: !vm.twoFactorAuthRequired */}<div className="sso__reg ng-scope" ng-if="!vm.twoFactorAuthRequired">
                    <strong className="pull-left text-uppercase" translate-once="ACCOUNT-DO-NOT-EXIST">Don't have an account?</strong>
                    <a className="btn-link btn-xs pull-right pointer" ng-click="vm.signup();" title="FACEIT Signup Now link">
                      <span translate-once="SIGNUP-NOW">Sign up now</span>
                      <img ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAAQIFESAoTKqrrbnFzv1ctRirAAAARklEQVQIW2NgYAhiAAP2Xwpg2u7/JDDN9v6nAJiR938iVOAHTKARTMv8fwKimOb/SwDRmv+fgbnrIVwpCJdBF8JlYN4GIgHzvBeITmk/OQAAAABJRU5ErkJggg==" alt="FACEIT Signup Now link" style={{height: '12px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAAQIFESAoTKqrrbnFzv1ctRirAAAARklEQVQIW2NgYAhiAAP2Xwpg2u7/JDDN9v6nAJiR938iVOAHTKARTMv8fwKimOb/SwDRmv+fgbnrIVwpCJdBF8JlYN4GIgHzvBeITmk/OQAAAABJRU5ErkJggg==" />
                    </a>
                  </div>{/* end ngIf: !vm.twoFactorAuthRequired */}
                </div>{/* end ngIf: !vm.isSignup */}
                {/* ngIf: vm.isSignup */}
              </div>{/* end ngIf: !vm.data.authenticated */}
            </div>{/* end ngIf: !vm.loading && vm.paramsSpecified && !vm.error */}
            {/* NOT LOADING, ERRORS */}
            {/* ngIf: !vm.loading && !vm.paramsSpecified || vm.error */}
          </div>
        </div>
      );

// const NewComponent = () => (
  
//         <form className="sso__login ng-untouched ng-not-empty ng-invalid ng-valid-email ng-invalid-recaptcha ng-dirty ng-valid-parse ng-invalid-required" name="login" ng-model="login" ng-submit="vm.authenticate(login)" style={{}}>
//           {/* Two-Factor Auth NOT REQUIRED */}
//           {/* ngIf: !vm.twoFactorAuthRequired */}<div ng-if="!vm.twoFactorAuthRequired" className="ng-scope">
//             {/* Email */}
//             <div className="form-group">
//               <label translate-once="EMAIL-ADDRESS-PLACEHOLDER" className="text-uppercase">Email Address</label>
//               <input type="email" className="form-control ng-touched ng-valid-email ng-dirty ng-empty ng-invalid ng-invalid-required" name="email" id="login_email" ng-model="vm.credentials.email" translate-once-placeholder="EMAIL-ADDRESS-PLACEHOLDER" ng-disabled="vm.data.login.requestPending" required placeholder="Email Address" style={{}} />
//             </div>
//             {/* Password */}
//             <div className="form-group">
//               <label translate-once="PASSWORD" className="text-uppercase">Password</label>
//               <input type="password" className="form-control ng-valid-required ng-touched ng-not-empty ng-dirty ng-valid-parse ng-valid" name="password" id="login_password" ng-model="vm.credentials.password" translate-once-placeholder="ENTER-PASSWORD" ng-disabled="vm.data.login.requestPending" required placeholder="Enter password" style={{}} />
//               {/* Forgot password link: leaving invisible, for now */}
//               <p className="clearfix invisible">
//                 <a ui-sref="." translate-once="FORGOT-YOUR-PASSWORD" className="btn-link btn-xs pull-right text-lowercase" href="#!">Forgot your password?</a>
//               </p>
//             </div>
//             {/* Hidden inputs */}
//             <input type="hidden" name="response_type" defaultValue="code" autoComplete="off" />
//             <input type="hidden" name="client_id" defaultValue="26cb6a4a-95a1-48bf-968e-5ef38da64bc4" autoComplete="off" />
//             <input type="hidden" name="redirect_popup" defaultValue="false" autoComplete="off" />
//             <input type="hidden" id="csrf_token" name="_csrf" defaultValue="254458f1-52b8-451d-b3b1-a93c257158f2" autoComplete="off" />
//           </div>{/* end ngIf: !vm.twoFactorAuthRequired */}
//           {/* Two-Factor Auth REQUIRED */}
//           {/* ngIf: vm.twoFactorAuthRequired */}
//           {/* Submit button */}
//           <div className="form-group">
//             <div><div className="grecaptcha-badge" data-style="inline" style={{width: '256px', height: '60px', position: 'fixed', visibility: 'hidden', display: 'block', transition: 'right 0.3s ease 0s', bottom: '14px', right: '-186px', boxShadow: 'gray 0px 0px 5px', borderRadius: '2px', overflow: 'hidden'}}><div className="grecaptcha-logo"><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdqOzQUAAAAAEqrrRp7klFOvR_NdDWyKXYIk9Wf&co=aHR0cHM6Ly9jZG4uZmFjZWl0LmNvbTo0NDM.&hl=ru&type=submit&v=HYx6hBAtwYatsD8qzq7tXNTk&theme=dark&size=invisible&badge=inline&cb=57d5mfidb8qr" width={256} height={60} role="presentation" name="a-4p0mckh3id8o" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div><div className="grecaptcha-error" /><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div><button type="submit" className="btn btn-primary btn-block btn-fixed-height g-recaptcha ng-isolate-scope" theme="'dark'" vc-recaptcha key="vm.reCaptcha" data-badge="'inline'" on-create="vm.captchaCreateCallback(widgetId)" on-success="vm.captchaResponseCallback(response, 'authenticate', login)" on-expire="vm.captchaExpireCallback()" ng-disabled="vm.data.login.requestPending">
//               {/* ngIf: !vm.data.login.requestPending */}<strong ng-if="!vm.data.login.requestPending" translate-once="LOGIN" className="ng-scope">Log in</strong>{/* end ngIf: !vm.data.login.requestPending */}
//               {/* ngIf: vm.data.login.requestPending */}
//             </button>
//           </div>
//         </form>
//       );

export default () => {
    const history = useHistory();
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    return (
        <PageWrapper>
            <NewComponent />
            {/* <Card>
                <CardContent>
                    <CardContentGrid>
                        <TextField onChange={({ target: { value }}) => {
                            setLogin(value)
                        }} label="Login" variant="outlined" required error={error} />
                        <TextField onChange={({ target: { value }}) => {
                            setPassword(value)
                        }} label="Password" variant="outlined" type="password" required error={error} />
                    </CardContentGrid>
                </CardContent>
                <CardActions>
                    <ButtonContainer>
                        <Button onClick={() => {
                            console.log(login)
                            console.log(password)
                            if (!!login && !!password) {
                                setError(false)
                                history.push('/match')
                            } else {
                                setError(true)
                            }
                        }}>
                            Login
                        </Button>
                    </ButtonContainer>
                </CardActions>
            </Card> */}
        </PageWrapper>
    )
}