import { items } from "./SuggestionItem.js"

export default class Suggestion {
  suggestion
  ul
  constructor({ $target, initialState, onEvent }) {
    this.$target = $target
    this.state = initialState
    this.count = 0

    this.onClick = onEvent

    this.render()
  }

  setState(newState) {
    this.state = newState
    this.render()
  }

  render() {
    if (!this.state) return
    if (this.suggestion) this.suggestion.remove()

    this.suggestion = document.createElement("div")
    this.suggestion.className = "Suggestion"
    this.$target.appendChild(this.suggestion)

    this.ul = document.createElement("ul")
    this.suggestion.appendChild(this.ul)
    this.ul.innerHTML = items(this.state.suggestionData, this.state.keyword)

    const lists = document.querySelectorAll("li")

    lists.forEach(item => {
      item.addEventListener("click", e => {
        const selectedWord = e.target.closest("li").textContent
        this.onClick(selectedWord)
      })
    })
  }

  remove() {
    if (!this.suggestion) return
    this.suggestion.remove()
  }

  arrowMove(key) {
    if (!this.suggestion) return
    const maxLength = this.state.suggestionData.length

    if (key == "ArrowUp") {
      if (this.count == 0) this.count = maxLength - 1
      else this.count--
    } else if (key == "ArrowDown") {
      if (this.count == maxLength - 1) this.count = 0
      else this.count++
    }

    this.ul.innerHTML = items(
      this.state.suggestionData,
      this.state.keyword,
      this.count
    )
  }
}

{
  /* <div class="Suggestion">
<ul>
  <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
  <li>Java<span class="Suggestion__item--matched">Script</span></li>
  <li>Type<span class="Suggestion__item--matched">Script</span></li>
  <li>Pure<span class="Suggestion__item--matched">Script</span></li>
</ul>
</div>  */
}

/*
keyword를 가지고, 검색해서 가져온 내용중 keyword에 해당하는 부분 양쪽에는 
<span class="Suggestion__item--matched">Script</span>
이렇게 span 태그로 감싸고, 나머지는 li로 감싸는 함수를 만들어야한다. 
*/

/*
화살표로 현재 순회중인 검색어를 확인하기 


*/
