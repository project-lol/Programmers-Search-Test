export const items = (suggestionData, keyword, selectedIndex = 0) => {
  let result = ""

  for (let i = 0; i < suggestionData.length; i++) {
    const matchedText = suggestionData[i].replace(
      new RegExp(keyword, "g"),
      `<span class="Suggestion__item--matched">${keyword}</span>`
    )
    if (i == selectedIndex)
      result += `<li class="Suggestion__item--selected">${matchedText}</li>`
    else result += `<li>${matchedText}</li>`
  }

  return result
}
