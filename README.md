# YouTube Transcript Downloader
---
## Description
This project provides tools to download and process transcripts from YouTube videos. It includes functionality for scraping URLs, fetching transcripts, and performing basic tests on transcript downloads.

## Folder Structure
Transcripts are saved in the following structure:

```
  all_transcript
    ├── {youtube_channel} 
        ├── youtube_urls.txt       # List of URLs for the specific channel (use this in generate_transcript.ipynb)
        └── transcripts
             ├── _{vid}.json      # Transcript for the specific video
             └── ...
```
* generate_transcript.ipynb: A Jupyter notebook that likely demonstrates how to generate transcripts for given YouTube URLs.
* read_urls.ipynb: A Jupyter notebook for reading and possibly scraping URLs from external sources.
* requirements.txt: Lists the dependencies needed to run the project.
* test_transcript.py: A Python script that contains tests for the transcript functionality.
* url_scrape.js: A JavaScript file used for scraping URLs (from a webpage).
* youtube_transcript_api: A folder containing youtube_transcript_api package.
