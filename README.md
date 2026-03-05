# search-shell-hybrid-app

## Code 
<img width="1505" height="933" alt="image" src="https://github.com/user-attachments/assets/7afe51b8-08b1-4b9f-96f7-0bfcfb77d6f5" />

## Running on the iOS
<img width="1858" height="864" alt="image" src="https://github.com/user-attachments/assets/504019ee-650a-4137-9075-9777de1f44ba" />

## Technical Reflection: Answer the following question in max 50 words: "Given that React Native is a bridged framework, why is this specific implementation categorized as a Hybrid/Shell architecture rather than a Bridged/Native UI architecture?".

Because the application here doesn't use native UI components that React Native translates via Bridge, but rather operates as a native shell containing only a WebView that displays a complete website (Google). This means the entire interface is HTML/Web content within an embedded browser, which is consistent with Hybrid/Shell Architecture.

