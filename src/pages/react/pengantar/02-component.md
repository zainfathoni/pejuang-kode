---
title: Mengenal Component
date: '2018-12-28T01:30:00Z'
author: zain
draft: true
---

## 4. Components

Di React, cara kita membagi elemen-elemen dari suatu tampilan adalah dengan memilahnya menjadi _Components_ yang terpisah. Untuk lebih jelasnya, mari kita lihat kembali _project_ terakhir kita di atas.

```jsx{2,6}
function greet(name) {
  return <h1>Hello, {name || 'Kisanak'}!</h1>
}

ReactDOM.render(greet('Pejuang'), document.getElementById('root'))
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
React.createElement(Greet, { name: 'Pejuang' })
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
  return <h1>Hello, {props.name || 'Kisanak'}!</h1>
}
```

_Class Component_:

```jsx{1,2,5}
class Greet extends React.Component {
  render() {
    return <h1>Hello, {this.props.name || 'Kisanak'}!</h1>
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
    return <h1>Hello, {this.props.names[0] || 'Kisanak'}!</h1>
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
    return <h1>Hello, {this.props.names[0] || 'Kisanak'}!</h1>
  }
}
```
