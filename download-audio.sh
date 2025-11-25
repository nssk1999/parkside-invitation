#!/bin/bash

# Script to download and extract audio from YouTube video
# Video: https://www.youtube.com/watch?v=I790VBhTMYY
# Audio starts from 0:20 seconds

echo "Downloading audio from YouTube video..."
echo "Video: https://www.youtube.com/watch?v=I790VBhTMYY"
echo "Audio will start from 0:20 seconds"
echo ""

# Check if yt-dlp is installed
if ! command -v yt-dlp &> /dev/null; then
    echo "yt-dlp not found. Installing..."
    if command -v brew &> /dev/null; then
        brew install yt-dlp
    elif command -v pip3 &> /dev/null; then
        pip3 install yt-dlp
    else
        echo "Please install yt-dlp manually:"
        echo "  macOS: brew install yt-dlp"
        echo "  Linux: pip3 install yt-dlp"
        exit 1
    fi
fi

# Check if ffmpeg is installed (needed for audio extraction)
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg not found. Installing..."
    if command -v brew &> /dev/null; then
        brew install ffmpeg
    else
        echo "Please install ffmpeg manually"
        exit 1
    fi
fi

# Create assets directory if it doesn't exist
mkdir -p assets

# Download audio and trim from 20 seconds
echo "Downloading and processing audio..."
yt-dlp -x \
  --audio-format mp3 \
  --audio-quality 192K \
  --postprocessor-args "ffmpeg:-ss 20" \
  "https://www.youtube.com/watch?v=I790VBhTMYY" \
  -o "assets/background-music.%(ext)s"

# Alternative: If you already have the video file, use this:
# ffmpeg -i input_video.mp4 -ss 20 -vn -acodec libmp3lame -ab 192k -ar 44100 assets/background-music.mp3

echo ""
echo "Audio file saved to: assets/background-music.mp3"
echo "File size:"
ls -lh assets/background-music.mp3

echo ""
echo "Next steps:"
echo "1. Review the audio file"
echo "2. If needed, trim it further using an audio editor"
echo "3. Commit and push to GitHub:"
echo "   git add assets/background-music.mp3"
echo "   git commit -m 'Add background music file'"
echo "   git push origin master"

