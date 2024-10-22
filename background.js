// background.js

// Listen for changes in the omnibox input
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    // No suggestions needed; you can leave this function empty
});

// Listen for when the input is confirmed (Enter pressed)
chrome.omnibox.onInputEntered.addListener((text) => {
    chrome.tabs.query({}, (tabs) => {
        // Find the matching tab based on the input text
        const matchingTab = tabs.find(tab => tab.title.toLowerCase().includes(text.toLowerCase()));

        if (matchingTab) {
            chrome.tabs.update(matchingTab.id, { active: true }); // Activate the matching tab
        } else {
            // Optionally create a new tab if no match is found
            // chrome.tabs.create({ url: text });
        }
    });
});
