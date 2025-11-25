# Background Audio Setup Instructions

## YouTube Video
Source: https://www.youtube.com/watch?v=I790VBhTMYY
Audio should start from **0:20 seconds**

## Steps to Add Background Audio

### 1. Extract Audio from YouTube Video

You have several options:

#### Option A: Using yt-dlp (Recommended)
```bash
# Install yt-dlp if not already installed
brew install yt-dlp  # macOS
# or
pip install yt-dlp

# Download audio and convert to MP3
yt-dlp -x --audio-format mp3 --audio-quality 0 \
  --postprocessor-args "ffmpeg:-ss 20" \
  "https://www.youtube.com/watch?v=I790VBhTMYY" \
  -o "assets/background-music.%(ext)s"
```

#### Option B: Using Online Tools
1. Use a YouTube to MP3 converter (e.g., ytmp3.cc, y2mate.com)
2. Download the audio file
3. Use an audio editor (Audacity, GarageBand, etc.) to trim from 0:20 seconds
4. Export as MP3

#### Option C: Using FFmpeg (if you have the video file)
```bash
# Extract audio starting from 20 seconds
ffmpeg -i input_video.mp4 -ss 20 -vn -acodec libmp3lame -ab 192k assets/background-music.mp3
```

### 2. Place Audio File

1. Save the audio file as `background-music.mp3` in the `assets/` folder
2. Ensure the file is optimized for web (compressed, reasonable file size)

### 3. File Requirements

- **Format**: MP3 (recommended) or OGG
- **Location**: `/parkside-invitation/assets/background-music.mp3`
- **File Size**: Keep under 2MB for fast loading
- **Duration**: Can be looped, so you can trim to a shorter segment

### 4. Current Implementation

The audio is configured to:
- **Autoplay**: Starts automatically when the story loads
- **Loop**: Repeats continuously
- **Volume**: Set to 50% (0.5) - can be adjusted in the code
- **Start Time**: Audio file should be trimmed to start from 0:20 of the original video

### 5. Adjust Audio Settings

To modify audio behavior, edit `index.html` and find:
```html
<amp-audio id="background-audio"
           src="/parkside-invitation/assets/background-music.mp3"
           autoplay
           loop
           volume="0.5">
</amp-audio>
```

**Options:**
- `volume="0.5"` - Adjust between 0.0 (mute) and 1.0 (full volume)
- Remove `autoplay` - Audio won't start automatically
- Remove `loop` - Audio plays once

### 6. Test

After adding the audio file:
1. Commit and push to GitHub
2. Test on mobile devices (audio autoplay works better on mobile)
3. Check that audio starts and loops correctly

## Note on Browser Autoplay Policies

Some browsers (especially desktop) may block autoplay with sound. The audio will work best on:
- Mobile devices (iOS Safari, Chrome Mobile)
- After user interaction on desktop browsers

## Alternative: Use amp-story-bookend for Audio Control

If you want users to control audio, you can add a mute/unmute button in the story bookend.

