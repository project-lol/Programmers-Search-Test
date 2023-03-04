import App from "./app.js"
new App(document.querySelector(".App"))

/*
1.
input 컴포넌트를 만든다. 
*/

/*
2.
검색어를 입력하면 해당 검색어를 기반으로 fetch해오도록 만든다.
*/

/*
- 언어목록 컴포넌트를 만든다. 
- 언어목록 컴포넌트를 SearchInput. 

- 언어목록 컴포넌트를 SearchInput 컴포넌트 안에 렌더링 할 것인가, 
밖에 렌더링할 것인가? 
  - 안에 렌더링을 하면 더 편할 것 같다. fetch 해 온 데이터를 가지고 그대로 렌더링하면 되기 때문에. 
  - 그리고 onClick은 콜백으로 받아서, 해당 값을 받고, 그 값을 가지고 search queue 컴포넌트에 넣는다. search queue 컴포넌트는 app에 존재한다. 
*/

/*
3. 
언어 검색 목록 컴포넌트를 만든다. 
*/

/*
4. 
- 언어 검색 목록 컴포넌트에 각각의 검색된 내용이 렌더링 되게 만든다. v
- 이때 매치된 텍스트는 하이라이트가 되도록 처리한다. v
- 빈 값으로 검색하거나, 검색결과가 없는 경우에는 제시하는 창이 사라지게 한다. v
- 키보드 아래 위로, 검색이 가능하게 만든다. v
- enter 키를 누를 경우, 해당 키워드를 콘솔에 출력하도록 만든다. v
- enter 키를 누를 경우, 해당 키워드를 alert에 띄운다. 
*/

/*
5. 
제시어를 클릭할 경우 alert를 띄운다. 
*/

/*
6.
SelectedLanguage 컴포넌트를 만든다. 
*/