---
title: Pengenalan React
date: "2018-05-06T00:23:35Z"
author: zain
---

Sudah bukan perdebatan lagi bahwa [React](https://reactjs.org) adalah salah satu framework JavaScript yang [paling dominan saat ini](http://stateofjs.com/2017/front-end/results/). Peminatnya pun paling tinggi di antara framework-framework JavaScript lainnya. Namun demikian, React tergolong framework JavaScript yang [cukup sulit untuk dipelajari](https://medium.com/pejuang-kode/react-atau-vue-de25264893f4), berikut beberapa alasannya.

### React bukan _framework_, tapi _library_

Berbeda dengan framework JavaScript lain pada umumnya, fitur yang disediakan oleh React hanya terbatas pada optimasi rendering HTML dengan memanfaatkan Virtual DOM, sedangkan framework lain seperti [Angular](https://angular.io/) dan [Vue](https://vuejs.org/) menyediakan fitur yang cukup lengkap, sehingga hampir semua kebutuhan dasar untuk membuat sebuah web _Single Page Application_ sudah dapat terpenuhi tanpa menggunakan tambahan _library_ lainnya.

### Konsep-konsep di React sangat erat kaitannya dengan konsep-konsep di JavaScript.

Sudah sewajarnya bahwa konsep-konsep suatu framework pasti didasarkan pada konsep-konsep yang ada di bahasa pemrograman yang digunakan. Namun ada yang unik dengan bahasa pemrograman JavaScript. Menurut [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/preface.md#summary), bahasa ini sangat mudah untuk dipelajari sebagian, tetapi jauh lebih sulit untuk dipahami secara utuh (atau bahkan seperlunya). Dengan dangkalnya pemahaman kita terhadap konsep-konsep di JavaScript, maka semakin sulitlah kita untuk bisa memahami konsep-konsep di React.

Oleh karena itulah, saya tergerak untuk menulis artikel berseri tentang React dan JavaScript. Awalnya saya ingin menulisnya satu persatu, tapi setelah melihat [hasil polling Facebook](https://www.facebook.com/zain.fathoni/posts/10213892438256376) yang saya selenggarakan tempo hari, ternyata minat "warga Facebook" untuk belajar keduanya hampir sama tingginya. Akhirnya saya putuskan untuk mencoba menulis keduanya secara paralel.

Saya akan mencoba menyajikan keduanya dengan cara memperkenalkan fitur React satu persatu sekaligus mengaitkannya dengan konsep JavaScript di artikel terpisah. Jadi setiap kali rilis, saya akan merilis dua tulisan sekaligus, satu untuk React dan satu untuk JavaScript. Apabila Anda ingin memberi saran kepada saya mengenai hal ini, silakan hubungi saya melalui [Facebook Messenger](https://m.me/zain.fathoni.page).

## 0. Persiapan

Cara termudah untuk mulai menggunakan React adalah menggunakan [CodePen](https://codepen.io/) atau [CodeSandbox](https://codesandbox.io). Dengannya, kita tidak perlu meng-install apapun di komputer kita. Cukup dengan membuka website tersebut dan membuat project baru di sana. Sebagai alat peraga untuk penjelasan saya di tulisan ini, kita akan menggunakan sebuah project di CodeSandbox berikut ini:

<iframe src="https://codesandbox.io/embed/github/zainfathoni/react/tree/pengenalan-react/0-persiapan/?autoresize=1&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

> Apabila Anda ingin menjalankannya di komputer Anda secara lokal, tinggal _download_ saja project tersebut, pastikan [NodeJS](https://nodejs.org/en/) sudah terinstall dengan menjalankan perintah `bash…node -v`, lalu jalankan perintah `bash…npm install && npm start` untuk menyalakan aplikasi.

Di project tersebut terdapat tiga buah file, yaitu file JavaScript `index.js`, HTML `index.html`, dan JSON `package.json`. Mari kita amati lebih jauh.

## 1. ReactDOM

File `index.js` ini berisikan contoh penggunaan React yang paling sederhana. Di sini kita meng-`js…import` dua _library_, yaitu **React** & **ReactDOM**. Kegunaan ReactDOM di sini cukup jelas, yaitu me-_render_ sesuatu ke sebuah HTML element yang memiliki `html…id=root`. Coba buka file `index.html`, pada baris ke-30 akan Anda temukan `html…<div id="root"></div>`. Di situlah aplikasi React kita ini akan dipasang nantinya.

```jsx{2,4,6}
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```

## 2. React

Nah, yang agak aneh adalah, untuk apa kita meng-`js…import` **React**, padahal di situ tidak terlihat sama sekali penggunaan React?
Untuk mengujinya, coba sekarang tambahkan `js…//` di depan `js…import React from 'react'` untuk menjadikannya komentar dan tidak terbaca oleh JavaScript.
Maka yang Anda lihat adalah pesan error seperti ini:

<iframe src="https://codesandbox.io/embed/github/zainfathoni/react/tree/pengenalan-react/2-react/?autoresize=1&fontsize=13&view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Ternyata React dibutuhkan untuk bisa menjalankan baris ini:

```jsx{2}
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```

Bagi yang baru paham JavaScript dan baru pertama kali ini belajar React, ada dua pertanyaan besar di sini:

1.  Bahasa apa ini? Mirip HTML, tapi kok ada di dalam file `js`?
2.  Kalau memang React dibutuhkan di sini, mana `React`-nya?

Untuk bisa menjawab kedua pertanyaan di atas, kita perlu berkenalan dulu dengan yang namanya **JSX** (JavaScript XML).

## 3. JSX

JSX digunakan di dalam React untuk mengekspresikan (_markup_ yang mirip dengan) HTML di dalam JavaScript. React [tidak mengharuskan](https://reactjs.org/docs/react-without-jsx.html) kita menggunakan JSX, tapi kebanyakan orang merasa sangat terbantu dengannya ketika menyusun tampilan antarmuka (UI) di dalam kode JavaScript.
Apabila kode di atas kita tulis ulang tanpa menggunakan JSX, maka jadinya akan seperti ini:

```js{2}
ReactDOM.render(
  React.createElement('div', null, 'Hello, world!')
  document.getElementById('root')
)
```
