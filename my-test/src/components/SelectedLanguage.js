export default class SelectedLanguage {
  constructor({ $target, initialState }) {
    this.$target = $target
    this.selectedBody = document.createElement("div")
    this.selectedBody.className = "SelectedLanguage"
    this.$target.appendChild(this.selectedBody)

    this.state = initialState

    this.render()
  }

  setState(newState) {
    this.state = newState
    this.render()
  }

  render() {
    if (!this.state) return
    this.selectedBody.innerHTML = ""

    const ul = document.createElement("ul")
    this.selectedBody.appendChild(ul)

    ul.innerHTML = `
        ${this.state.map(language => `<li>${language}</li>`).join("")}
        `
  }
}
