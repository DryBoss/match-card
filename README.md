# 🃏 Match Card

A memory-matching card game built with vanilla HTML, CSS, and JavaScript. Flip cards to find all 8 matching pairs on a 4×4 board before the 60-second timer runs out, in as few flips as possible.

## 🎮 How to Play

- The game starts automatically as soon as the page loads — the timer begins counting down from 60 seconds right away.
- Click a card to flip it and reveal its face.
- Click a second card to try to find its match:
  - **Match** → both cards stay face-up.
  - **No match** → both cards briefly show their faces, then flip back down.
- Each pair of flips increases your flip count.
- **Win**: match all 8 pairs before time runs out. Your score is calculated as `(60 − flips) × seconds remaining` — fewer flips and more time left means a higher score.
- **Time's up**: if the timer hits 0 before you finish, all remaining cards are revealed and the round ends.
- Your best score is saved locally in the browser as a running **Highscore**.
- Use the restart button (or "play again" after a round ends) to reshuffle and try again.

## 🗂️ Project Structure

```
match-card/
├── index.html               # Page markup: 16-card grid, timer, flip counter, score menu
├── images/
│   ├── match-card-favicon.png
│   ├── cards/                 # Card face images (8 unique faces + card back)
│   │   ├── 4-of-hearts.png
│   │   ├── 10-of-hearts.png
│   │   ├── ace-of-clubs.png
│   │   ├── ace-of-diamonds.png
│   │   ├── ace-of-spades.png
│   │   ├── jack-of-hearts.png
│   │   ├── king-of-hearts.png
│   │   ├── queen-of-hearts.png
│   │   └── hide-card.png       # Face-down card back
│   └── icons/
│       ├── restart.png / restart_hover.png
│       └── help.png / help_hover.png
└── main/
    ├── css/
    │   ├── main.scss          # Source Sass for styling
    │   └── main.css            # Compiled stylesheet
    └── js/
        └── main.js             # Game logic: shuffling, flip/match handling, timer, scoring
```

## ⚙️ How It Works (Under the Hood)

- 16 card slots are laid out in the HTML; `main.js` randomly assigns each slot one of 8 card images so every image appears exactly twice, then preloads all card faces up front for smooth flipping.
- Clicking a face-down card flips it and records the choice; clicking a second card compares the two:
  - On a match, both cards are marked permanently revealed.
  - On a mismatch, both cards flip back after a short delay (with CSS transition classes handling the flip animation).
- A `setInterval` countdown updates the on-screen timer every second and ends the round (revealing all cards) if it reaches zero.
- Once every card is matched, the round ends early, the score is computed from remaining flips and time, and it's compared against the stored high score in `localStorage`.

## 🚀 Running Locally

This is a static site with no build step or external dependencies (beyond a Google Font).

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL (e.g. `http://localhost:8000`) in your browser.

If you'd rather work from the Sass source, compile `main/css/main.scss` to `main/css/main.css` with your Sass compiler of choice, e.g.:

```bash
npx sass main/css/main.scss main/css/main.css
```

## 🛠️ Tech Stack

- Vanilla HTML, CSS (Sass), and JavaScript
- No frameworks or build tools required to run
- Google Fonts (`Press Start 2P`) for the retro pixel look
- `localStorage` for persisting the high score

## ✏️ Customizing

- **Number of cards / pairs**: The board is hardcoded to 16 cards (`c1`–`c16`) in `index.html`, matched against the 8-image `cardImages` array in `main.js` — both need to change together for a different grid size.
- **Timer length**: Adjust the initial `time` value in `main.js` (default 60 seconds).
- **Scoring formula**: Edit the `(60 - flip) * time` calculation in `main.js` to change how score is derived.
- **Card art**: Swap images in `images/cards/` for a different theme/deck.
- **Styling**: Edit `main/css/main.scss` and recompile, or edit `main/css/main.css` directly.

## 💬 Feedback

Feedback and suggestions are welcome — feel free to open an issue or reach out to [DryBoss](https://github.com/DryBoss) on GitHub.
