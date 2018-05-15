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

Project di atas bisa Anda _edit_ secara langsung sebagai sarana untuk bereksperimen. Tetapi apabila Anda ingin menjalankannya di komputer Anda secara lokal, tinggal _download_ saja project tersebut, pastikan [NodeJS](https://nodejs.org/en/) sudah terinstall dengan menjalankan perintah `bash…node -v`, lalu jalankan perintah `bash…npm install && npm start` untuk menyalakan aplikasi.

Di project tersebut terdapat tiga buah file, yaitu file JavaScript `index.js`, HTML `index.html`, dan JSON `package.json`. Kita akan bedah satu persatu file tersebut.

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

JSX digunakan di dalam React untuk mengekspresikan (_markup_ yang mirip dengan) HTML di dalam JavaScript. React [tidak mengharuskan](https://reactjs.org/docs/react-without-jsx.html) kita menggunakan JSX, tapi kebanyakan developer merasa sangat terbantu dengannya ketika menyusun tampilan antarmuka (UI) di dalam kode JavaScript.
Apabila kode di atas kita tulis ulang tanpa menggunakan JSX, maka jadinya akan seperti ini:

```js{2}
ReactDOM.render(
  React.createElement('h1', null, 'Hello, world!')
  document.getElementById('root')
)
```

Nah, di sini baru terlihat bahwa ternyata `js…React` memang dibutuhkan di baris ini. Transformasi _source code_ JavaScript semacam ini dimungkinkan berkat adanya [Babel](https://babeljs.io/). Lebih dalam tentang Babel akan saya bahas pada tulisan lainnya, bagi yang masih penasaran, dapat mencoba bermain-main dengannya [di sini](https://babeljs.io/repl/#?presets=react).

Untuk bisa menggunakan JSX di React dengan baik, kita harus mampu membedakan antara **_Expression_** dan **_Statement_** di JavaScript. Saya akan menjelaskan perbedaan antara keduanya di tulisan yang akan datang, tapi sambil menunggu, sementara ini silakan coba baca dulu saja artikel [_Expressions versus statements in JavaScript_](http://2ality.com/2012/09/expressions-vs-statements.html) ini.

### 3.1 Menggunakan _Expression_ di JSX

Dengan JSX, kita bisa membuat HTML yang dinamis. Caranya adalah dengan memasukkan _expression_ ke dalam JSX, dan mengapitnya dengan karakter kurung kurawal `js…{}` seperti ini:

```jsx{2}
ReactDOM.render(
  <h1>Hello, {/* Letakkan JavaScript Expression di sini */}!</h1>,
  document.getElementById('root')
)
```

Sebagai contoh, amati bagaimana cara saya membuat kalimat `Hello, world!` sebelumnya menjadi bergantung pada nilai variabel lain. Coba ubah nilai dari variabel `firstName` dan `lastName` di sini, dan amati hasilnya!

<iframe src="https://codesandbox.io/embed/github/zainfathoni/react/tree/pengenalan-react/3-1-expression-di-jsx/?autoresize=1&fontsize=12&view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### 3.2 JSX adalah _Expression_

Selain bisa mengandung _Expression_, ternyata JSX itu sendiri merupakan _Expression_. Jadi setelah di-_compile_ oleh [Babel](https://babeljs.io/), JSX akan diganti menjadi pemanggilan fungsi `js…React.createElement()` yang menghasilkan objek JavaScript.

Dengan demikian, kita bisa memperlakukannya sebagaimana _Expression_ JavaScript pada umumnya. Misalnya, menjadikannya sebagai nilai kembalian dari sebuah fungsi. Kita coba ganti JSX di atas dengan pemanggilan sebuah fungsi `js…greet(name)`. Coba kosongkan parameter di pemanggilan fungsi `js…greet()` dan amati hasilnya!

<iframe src="https://codesandbox.io/embed/github/zainfathoni/react/tree/pengenalan-react/3-2-jsx-adalah-expression/?autoresize=1&fontsize=12&view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### 3.3 _Attributes_ & _Children_ di JSX

Sebagaimana HTML biasa, JSX juga bisa menerima _attributes_ & _children_. Hanya saja, akibat keterbatasan JavaScript, ada sedikit perbedaan antara _attributes_ di JSX dan _attributes_ di HTML, antara lain sebagai berikut:

1.  Di HTML, nama _attributes_ berbentuk `kebab-case` seperti ini, sedangkan di JSX nama _attributes_ berbentuk `camelCase` seperti ini.
2.  Beberapa _attributes_ HTML seperti [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) & [for](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) harus diganti dengan `className` & `htmlFor` di JSX, karena `class` & `for` sudah terlanjur dijadikan sebagai [_Reserved Keywords_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) di JavaScript.
3.  Di HTML ada beberapa _tag_ tertentu yang tidak memerlukan (bahkan tidak membolehkan) _closing tag_, seperti [\<br>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) misalnya, sedangkan di JSX semua _tag_ harus ditutup, termasuk `<br />` sekalipun.

Sebagai contoh, untuk menghasilkan _tag_ HTML yang seperti ini:

```html
<label for="email" class="clearfix">
  <input id="email" tabindex="1" />
  <br>
  Email
</label>
```

Kita harus menuliskan JSX seperti ini:

```jsx
<label htmlFor="email" className="clearfix">
  <input id="email" tabIndex="1" />
  <br />
  Email
</label>
```

Namun demikian, di balik "keanehan-keanehan" JSX di atas, terdapat sebuah "kekuatan besar" yang dimiliki JSX 😎, yaitu memasukkan _Expression_ JavaScript ke dalam nilai _attributes_, sebagaimana yang kita lakukan kepada _children_ di [poin sebelumnya](#31-menggunakan-expression-di-jsx). Berikut contohnya:

```jsx
<label htmlFor={id} className={classNames}>
  <input id={id} tabIndex={x + 1} />
  <br />
  Email {isInvalid(email) && 'is invalid!'}
</label>
```

## 4. Components

Di React, cara kita membagi elemen-elemen dari suatu tampilan adalah dengan memilahnya menjadi _Components_ yang terpisah. Untuk lebih jelasnya, mari kita lihat kembali _project_ terakhir kita di atas.

```jsx{2,6}
function greet(name) {
  return <h1>Hello, {name || 'Kisanak'}!</h1>
}

ReactDOM.render(
  greet('Pejuang'),
  document.getElementById('root')
)
```

Di sini, fungsi `js…greet(name)` itu menghasilkan _element_ HTML `h1`. Kita bisa saja membuat berbagai fungsi yang pada akhirnya menghasilkan sekumpulan _element_ HTML seperti fungsi di atas. Tetapi React memiliki standard tersendiri untuk memudahkan kita dalam menyusun fungsi-fungsi tersebut, yaitu dengan menjadikannya sebagai _Components_. Kita akan mulai berkenalan dengan bentuk komponen yang paling sederhana di React, yaitu **_Functional Components_**.

### 4.1 _Functional Components_

Sesuai dengan namanya, _Functional Components_ ini sebenarnya hanyalah fungsi JavaScript biasa. Yang menjadikannya layak untuk disebut sebagai sebuah _Component_ hanyalah 3 syarat berikut ini:

1.  Hanya menerima **sebuah** parameter dengan tipe `object`
2.  Menghasilkan _element_ HTML atau _component_ React
3.  Nama fungsi diawali dengan huruf kapital, untuk membedakan _component_ React dengan _element_ HTML biasa

Fungsi `js…greet(name)` kita sudah memenuhi syarat ke-2, yaitu menghasilkan _element_ HTML `h1`. Fungsi ini juga sudah memenuhi sebagian dari syarat pertama, yaitu hanya menerima **sebuah** parameter, tetapi tipenya masih `string`. Ini berarti kita bisa membuatnya menjadi _component_ cukup dengan mengubah parameternya menjadi bertipe `object`. Selain itu, kita juga harus mengubah nama fungsinya menjadi diawali dengan huruf kapital supaya bisa memenuhi syarat yang ketiga.

```jsx{1-2}
function Greet(props) {
  return <h1>Hello, {props.name || 'Kisanak'}!</h1>
}
```

Dengan demikian, maka fungsi ini sudah layak untuk disebut sebagai sebuah _Functional Component_! Mudah bukan? 😏
Lantas, apa keistimewaan dari _Functional Component_ ini? 🤔

> Setiap _Component_ di React dapat disusun satu sama lain dengan menggunakan JSX, sebagaimana _Element_ HTML.

Setelah mengubahnya menjadi _Component_, maka pemanggilan fungsi `js…Greet()` ini dapat kita tuliskan sebagai ekspresi JSX berikut ini:

<iframe src="https://codesandbox.io/embed/github/zainfathoni/react/tree/pengenalan-react/4-1-functional-components/?autoresize=1&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Nah, kalau sudah begini, fungsi `js…Greet()` kita sudah terlihat seperti HTML yang "menyusup" di tengah-tengah kode JavaScript kan? 😁 Selamat! Anda telah berhasil membuat komponen React pertama Anda! 🤝

### 4.2 _Object_ Props

Apabila Anda amati, saya menamai satu-satunya parameter di fungsi `js…Greet()` tersebut dengan nama `props`, itu saya lakukan bukan tanpa alasan. Oleh React, istilah `props` ini memang dijadikan nama standard bagi _object_ JavaScript yang berisi **_properties_** suatu komponen React.

Setiap kali React menemukan suatu ekspresi komponen dalam JSX, ia akan menggabungkan seluruh _attributes_ JSX tersebut ke dalam komponen itu sebagai sebuah _object_. Jadi, ekspresi `jsx…<Greet name='Pejuang' />` di atas itu sebenarnya diterjemahkan oleh React menjadi seperti ini:

```js{3}
React.createElement(
  Greet,
  { name: 'Pejuang' }
)
```

Kalau tidak percaya, silakan coba salin kode di atas dan tempelkan ke CodeSandbox sebelumnya. Hasil tampilannya pasti akan sama persis. 😉

### 4.3 Props tidak boleh diubah

Dalam React, **props** adalah sarana utama kita memberikan _input_ kepada suatu komponen. React mengharuskan setiap komponen menghasilkan tampilan yang sama persis setiap kali diberikan _input_ yang sama persis. Untuk itu, React menetapkan aturan khusus untuk **props** ini, yaitu:

> Semua komponen React harus bertindak seperti [_pure functions_](https://en.wikipedia.org/wiki/Pure_function) terhadap props-nya.

Di sini kita mengenal istilah baru, yaitu _pure functions_. Apa itu _pure functions_? _Pure functions_ adalah fungsi yang murni. ... 🦗... 🦗... 🦗... ✌🏼😁 hehehe...

Kembali ke laptop. Suatu fungsi bisa dikatakan _pure function_ apabila memenuhi dua syarat berikut ini:

1.  Selalu mengembalikan hasil yang sama persis setiap kali diberikan masukan yang sama persis.
2.  Setiap pemanggilannya tidak mengakibatkan "efek samping" kepada bagian program lainnya.

Pembahasan lebih lanjut mengenai _pure functions_ akan saya jelaskan di tulisan lain ke depannya.

Kalau kita sama sekali tidak boleh mengubah props, lantas bagaimana jika kita memerlukan suatu nilai yang bisa diubah untuk menentukan tampilannya? Misalnya, kita ingin komponen `jsx…<Greet />` kita dapat menerima beberapa nama sekaligus dan menampilkannya secara bergantian. Di sinilah kita mulai perlu membuat komponen yang lebih kompleks daripada _Functional Components_ di atas.

### 4.4 _Class Components_

Selain menggunakan [fungsi](#41-functional-components), kita juga bisa mendefinisikan komponen React dengan menggunakan `js…class` JavaScript. Mari kita coba praktikkan ke dalam komponen `jsx…<Greet />` kita.

_Functional Component_:

```jsx{1,4}
function Greet(props) {
  return (
    <h1>
      Hello, {props.name || 'Kisanak'}!
    </h1>
  )
}
```

_Class Component_:

```jsx{1,2,5}
class Greet extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name || 'Kisanak'}!
      </h1>
    )
  }
}
```

Ada tiga perubahan signifikan di sini, yaitu:

1.  Fungsi `js…Greet(props)` berubah menjadi `js…class Greet` yang meng-`js…extends React.Component`.
2.  Badan fungsi dipindah ke dalam _method_ `js…render()`.
3.  `js…props` tidak lagi diperoleh melalui parameter fungsi, tetapi melalui objek `js…this` dari `js…class` tersebut.

Selain dari ketiga hal di atas, kode lainnya masih sama persis. Lagi-lagi, kalau Anda masih tidak percaya juga, silakan coba lagi salin kode di atas dan tempelkan ke CodeSandbox sebelumnya. Hasil tampilannya juga pasti masih sama persis. 😅

### 4.5 State

Dengan mendefinisikan komponen `jsx…<Greet />` sebagai `js…class`, kita mendapatkan beberapa fitur tambahan dari React yang sebelumnya tidak bisa kita peroleh dengan _Functional Component_. Salah satunya adalah adanya objek baru bernama `state` yang dapat kita gunakan untuk mewakili kondisi internal dari suatu komponen.

Mari kita coba berlatih menggunakannya untuk menyimpan nama yang sedang ditampilkan oleh komponen `jsx…<Greet />`. Pertama-tama, kita ubah dulu komponen `jsx…<Greet />` untuk menerima props `names` berupa `js…array`, dan hanya menampilkan nama pertama di `js…array` tersebut.

```jsx{5,12}
class Greet extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.names[0] || 'Kisanak'}!
      </h1>
    )
  }
}

ReactDOM.render(
  <Greet names={['Pejuang', 'Kode', 'Indonesia']} />,
  document.getElementById('root')
)
```

Kemudian kita tambahkan _class constructor_ yang menginisialisasi objek `js…this.state` dengan sebuah _property_ bernama `id`.

```jsx{2-5}
class Greet extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: 0 }
  }

  render() {
    return (
      <h1>
        Hello, {this.props.names[0] || 'Kisanak'}!
      </h1>
    )
  }
}
```
