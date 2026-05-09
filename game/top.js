class TopBar extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
        this.innerHTML = `
    <div id="menu" class="menu" style="z-index: 1000000000 !important;">
    <span onclick="location='/'" style="rotate: 180deg;" class="material-symbols-outlined">
    exit_to_app
    </span>
        <span id="share" onclick="navigator.share({title: 'Join my game!', url: window.shareURL()})" class="material-symbols-outlined">
          group_add
          </span>
`
    }
}

customElements.define("top-bar", TopBar);