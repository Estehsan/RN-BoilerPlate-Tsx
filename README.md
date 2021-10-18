# RN-BoilerPlate-Tsx

![github](https://user-images.githubusercontent.com/7809332/137706672-541d7e54-5bb0-4526-9d9f-c20c5662de6e.png)

# React Native Boilerplate

Are you looking to get started with React Native development? I’ve created a boilerplate that can help you kickstart your project. It includes everything from Design to Development, and it also has 100% code coverage. Check out the repo on GitHub!

```
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :)
```
## QUICK START
To create a new project using the boilerplate simply run :

```
git clone https://github.com/Estehsan/RN-BoilerPlate-Tsx.git
```
Go to the directory 
```
cd RN-BoilerPlate-Tsx
```
Install the project 

- `yarn install` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the *platform* application (remember to start a simulator or connect a device) 

If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.
```
npx pod-install ios
```

To run it on IOS
```
yarn ios
```

To run it on Android
```
yarn android
```
## Add Keys

Go to `src/config/keys.tsx` and replace `FIREBASE_CONFIG` with your own firebase config.

```bash
  apiKey: xxxx,
  authDomain: xxx',
  projectId: xxx,
  storageBucket: xxx,
  messagingSenderId: 'xxx,
  appId: xxx,
  measurementId: xxx,
```
Replace `WEB_CLIENT_ID` with your own Google ID.

```
export const WEB_CLIENT_ID =
  ' xxx ';
```
Replace `APP_KEY` with your own Facebook App.

```
export const APP_KEY =
  '  xxx  ';
```
## Badges


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
