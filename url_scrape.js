// Get list of all YouTube Video URLs from a Channel Free (no extension or tools needed)

// Go to YouTube channel > Videos (ex: https://www.youtube.com/@devinschumacher/videos)
// Open chrome dev tools > console (mac hotkey: cmd+opt+j)
// Paste the code snippet below in the window and press return
// Wait (time depends on size of channel)
// List of URLs will be downloaded to your computer in a .txt file!



function scrollAndGetUrls() {
  return new Promise((resolve) => {
    let lastHeight = 0;
    let unchanged = 0;
    let urlsize = 0;
    let scrollInterval = setInterval(() => {
      window.scrollBy(0, 600); // Scroll by 500 pixels each time
      
      let newHeight = document.body.scrollHeight;
      if ((window.innerHeight + window.pageYOffset) >= newHeight) {
        urlsize++;
        if (newHeight === lastHeight) {
          unchanged++;
          if (unchanged >= 10 || urlsize >= 100) {
            clearInterval(scrollInterval);
            console.log("Scrolling complete. Now collecting URLs...");
            
            setTimeout(() => {
              let videoUrls = Array.from(document.querySelector('#content').querySelectorAll('a'))
              .filter(a => a.href.includes('/watch?v='))
              .map(a => ({
                  url: a.href,
                  title: a.title.replace(/"/g, '')
              }));

              let urlText = videoUrls.map(video => `{"Title": "${video.title}", "URL": "${video.url}"}`).join('\n');
              let blob = new Blob([urlText], {type: 'text/plain'});
              let a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = 'youtube_urls.txt';
              a.click();
              URL.revokeObjectURL(a.href);

              console.log(`Collected ${videoUrls.length} video URLs.`);
              resolve();
            }, 5000);
          }
        } else {
          unchanged = 0;
          lastHeight = newHeight;
        }
      }
    }, 1000);
  });
}

// Run the function
scrollAndGetUrls().then(() => {
  console.log("Process complete. File should be downloading.");
});