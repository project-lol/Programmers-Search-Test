import Suggestion from "./Suggestion.js"
import { debounce } from "../lib/debounce.js"

export default class SearchInput {
  constructor({ $target, onEvent }) {
    this.$target = $target
    this.form = document.createElement("form")
    this.form.className = "SearchInput"
    this.$target.appendChild(this.form)

    this.onEvent = onEvent

    this.render()
  }

  render() {
    this.form.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script" autofocus>`
    this.form.addEventListener("keydown", e => {
      if (e.key == "Enter") e.preventDefault()
    })
    const input = document.querySelector("input")

    const suggestion = new Suggestion({
      $target: this.$target,
      initialState: null,
      onEvent: this.onEvent,
    })

    input.addEventListener(
      "keyup",
      debounce(async e => {
        e.preventDefault()
        const keyword = e.target.value
        if (!keyword) return suggestion.remove()

        const key = e.key
        const selectedWord = document.querySelector(
          ".Suggestion__item--selected"
        )
        if (key == "Enter")
          return selectedWord && this.onEvent(selectedWord.textContent)
        if (key == "ArrowDown" || key == "ArrowUp")
          return suggestion.arrowMove(key)

        const suggestionData = await (
          await fetch(
            `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`
          )
        ).json()
        if (suggestionData.length == 0) return suggestion.remove()

        suggestion.setState({ suggestionData, keyword })
      }, 200)
    )
  }
}
