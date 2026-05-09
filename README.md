# Party Social

Party Social is a decentralized, real-time multiplayer party game powered by the Nostr protocol. Inspired by classic "fill-in-the-blank" party games, players can join rooms, answer prompts, and vote on the funniest or most creative submissions—all without a centralized server.

---

## 🚀 Features

- **Decentralized Gameplay**  
  Uses Nostr relays (Kinds `21000-21004`) to manage game states, prompts, and voting.

- **Prompt Packs**  
  Create, browse, and edit custom prompt packs stored as Kind `30311` (Metadata) and Kind `30312` (Prompts) events.

- **Flexible Identity**  
  Sign in as a Guest (ephemeral key) or use your existing Nostr identity via NIP-7 browser extensions.

- **Real-time Interaction**  
  Live synchronization of game phases (Answering, Voting, Results) across all connected clients.

- **No Database Required**  
  All game data and community packs are fetched directly from the Nostr network.

---

## 🛠️ How to Play

### 1. Sign In

- **Guest:** Generates a temporary keypair for the session.
- **NIP-7:** Uses your Nostr extension (like Alby or Nos2x) to sign events.

### 2. Join or Create a Game

- **Host:** Click **Create Game** to generate a unique Game ID. Share this ID with your friends.
- **Player:** Enter the shared Game ID and click **Join Game**.

### 3. The Game Loop

#### Answering Phase
The host selects a Prompt Pack and starts the round. Everyone types their best response to the prompt.

#### Voting Phase
Once answers are in, everyone votes for their favorite (you can't vote for yourself!).

#### Results Phase
The winner is revealed based on the number of votes received.

---

## 🎨 Content Creation

You can contribute to the community by creating your own content:

- **Create Pack:** Start a new themed pack (e.g., *Tech Jokes*, *College Life*).
- **Add Prompts:** Add custom fill-in-the-blank questions to your packs.
- **Browse:** Load and search for packs created by other users across the Nostr relay network.

---

# Technical Details

## Event Kinds Used

| Kind | Name | Description |
|------|------|------|
| 21000 | Game Metadata | Identifies the host and game session |
| 21001 | Game Prompt | The active prompt for the current round |
| 21002 | Game Answer | A player's submission for the round |
| 21003 | Game Vote | A vote cast for a specific answer |
| 21004 | Game Phase | Signals state changes (e.g., moving to "Voting") |
| 30311 | Pack Meta | NIP-33 parameterized replaceable event for pack details |
| 30312 | Pack Prompt | Individual prompt events linked to a pack |

---

## Relays

By default, the app connects to:

- `wss://nos.lol`
- `wss://relay.primal.net`

---

## 🏗️ Development

The project is a single-file web application built with:

- **Vanilla JS** — Logic and DOM manipulation
- **Nostr-tools** — Cryptographic signing and relay communication
- **CSS** — Simple, clean box-model styling

### To Run Locally

Simply open `index.html` in any modern web browser. No build step required.

---

## ⚖️ License

This project is licensed under MIT. Feel free to fork, modify, and host your own version!