import SearchInput from "./components/SearchInput.js"
import SelectedLanguage from "./components/SelectedLanguage.js"

export default class App {
  constructor($body) {
    this.$body = $body
    this.selectedWords = []
    this.render()
  }

  render() {
    const selectedLanguage = new SelectedLanguage({
      $target: this.$body,
      initialState: null,
    })
    new SearchInput({
      $target: this.$body,
      onEvent: selectedWord => {
        alert(selectedWord)
        this.setSelectedWord(selectedWord)

        selectedLanguage.setState(this.selectedWords)
      },
    })
  }

  setSelectedWord(newWord) {
    console.log(newWord)
    if (this.selectedWords.includes(newWord)) {
      const index = this.selectedWords.indexOf(newWord)
      this.selectedWords.splice(index, 1)
      this.selectedWords.push(newWord)
    } else if (this.selectedWords.length == 5) {
      this.selectedWords.shift()
      this.selectedWords.push(newWord)
    } else {
      this.selectedWords.push(newWord)
    }
  }
}

{
  /* <div class="SelectedLanguage">
<ul>
  <li>JavaScript</li>
  <li>Python</li>
  <li>Elixir</li>
  <li>Java</li>
  <li>PHP</li>
</ul>
</div>
<form class="SearchInput">
<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">
</form>
<div class="Suggestion">
<ul>
  <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
  <li>Java<span class="Suggestion__item--matched">Script</span></li>
  <li>Type<span class="Suggestion__item--matched">Script</span></li>
  <li>Pure<span class="Suggestion__item--matched">Script</span></li>
</ul>
</div> */
}
