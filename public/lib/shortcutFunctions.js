// console.log("shortcuts: begin in shortcutFunctions.js")
// Office.onReady(() => {
//     console.log("shortcuts: in Office.onReady in shortcutFunctions.js");
// });
// console.log("shortcuts: before associates in shortcutFunctions.js");
// Office.actions.associate("ShowTaskpane", () => {
//     console.log("shortcuts: [ShowTaskpane] invoked in shortcutFunctions.js");
// });
// Office.actions.associate("HideTaskpane", () => {
//     console.log("shortcuts: [HideTaskpane] invoked in shortcutFunctions.js");
//     return Office.addin
//         .hide()
//         .then(() => {
//             return;
//         })
//         .catch((error) => {
//             return error.code;
//         });
// });
// Office.actions.associate("RunAction", () => {
//     console.log("shortcuts: [RunAction] invoked in shortcutFunctions.js");
//     return;
// });
// Office.actions.getShortcuts()
//     .then((shortcuts) => {
//         for (const action in shortcuts) {
//             let shortcut = shortcuts[action];
//             console.log(`shortcuts: ${action}: ${shortcut}`);
//         }
// });
// console.log("shortcuts: after associates in shortcutFunctions.js");
// console.log("shortcuts: end in shortcutFunctions.js")