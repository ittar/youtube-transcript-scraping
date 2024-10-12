from youtube_transcript_api import YouTubeTranscriptApi

video_id = input("Youtube url: ")
transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['sl'])

print(transcript)