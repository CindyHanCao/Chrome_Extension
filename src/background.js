chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    chrome.alarms.create('refresh', { periodInMinutes: 0.1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name);
    helloWorld();
});

function helloWorld(){
    console.log("Hello, world!");
}
