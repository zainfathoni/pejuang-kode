---
title: Pengenalan React
date: "2018-05-06T00:23:35Z"
---

Sudah bukan perdebatan lagi bahwa [React](https://reactjs.org) adalah salah satu framework JavaScript yang [paling dominan saat ini](http://stateofjs.com/2017/front-end/results/). Peminatnya pun paling tinggi di antara framework-framework JavaScript lainnya. Namun demikian, React tergolong framework JavaScript yang cukup sulit untuk dipelajari, berikut beberapa alasannya.

### React bukan _framework_, tapi _library_

Berbeda dengan framework JavaScript lain pada umumnya, fitur yang disediakan oleh React hanya terbatas pada optimasi rendering HTML dengan memanfaatkan Virtual DOM, sedangkan framework lain seperti [Angular](https://angular.io/) dan [Vue](https://vuejs.org/) menyediakan fitur yang cukup lengkap, sehingga hampir semua kebutuhan dasar untuk membuat sebuah web _Single Page Application_ sudah dapat terpenuhi tanpa menggunakan tambahan _library_ lainnya.

### Konsep-konsep di React sangat erat kaitannya dengan konsep-konsep di JavaScript.

Sudah sewajarnya bahwa konsep-konsep suatu framework pasti didasarkan pada konsep-konsep yang ada di bahasa pemrograman yang digunakan. Namun ada yang unik dengan bahasa pemrograman JavaScript. Menurut [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/preface.md#summary), bahasa ini sangat mudah untuk dipelajari sebagian, tetapi jauh lebih sulit untuk dipahami secara utuh (atau bahkan secukupnya). Dengan dangkalnya pemahaman kita terhadap konsep-konsep di JavaScript, maka semakin sulitlah kita untuk bisa memahami konsep-konsep di React.

```jsx{2-3,6}
const Styled = styled.div`
  margin: 0 auto;
  color: #454545;
`

const Component = props => <Styled {...props} />
```
