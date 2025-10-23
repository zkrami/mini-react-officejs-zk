import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import dva from 'dva';
import './index.css';
import router from './router';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

declare global {
    interface Window {
      __$$notInOffice?: boolean;
    }
}

function initializeApp() {
    //@ts-ignore
    //import createLoading from 'dva-loading';

    initializeIcons();

    // 1. Initialize
    const app = dva();
    //app.use(createLoading());

    // 2. Plugins
    // app.use({});

    // 3. Model
    //@ts-ignore
    // 4. Router
    //@ts-ignore
    app.router(router);

    // 5. Start
    app.start('#root');
}

console.log("before Office.onReady index.tsx")
Office.onReady(() => {
    console.log("after Office.onReady index.tsx")
    initializeApp();
});

// console.log("shortcuts: before associates in index.tsx")
// Office.actions.associate("ShowTaskpane", () => {
//     console.log("shortcuts: [ShowTaskpane] invoked in index.tsx");

// });
// Office.actions.associate("HideTaskpane", () => {
//     console.log("shortcuts: [HideTaskpane] invoked in index.tsx");
// });
// Office.actions.associate("RunAction", () => {
//     console.log("shortcuts: [RunAction] invoked in index.tsx");
//     return;
// });
// Office.actions.getShortcuts()
//     .then((shortcuts) => {
//         for (const action in shortcuts) {
//             let shortcut = shortcuts[action];
//             console.log(`shortcuts: ${action}: ${shortcut}`);
//         }
// });
// console.log("shortcuts: after associates in index.tsx")
