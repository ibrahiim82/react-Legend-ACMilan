import "./App.css";
import Header from "../src/components/Header";
import CardContainer from "./components/CardContainer";


function App() {
 
  return (
  <div className="App">


  <Header />
 <CardContainer/>

  </div>
  );
}

export default App;



// function App() {
//     const [count, setCount]=useState (0) //'("") parantez içerisine " konuyunca bunu string bir ifade olarak aldıladığını için 11111 şeklinde yazıyor // (null) yazıldığı zamansa boş kabu lettği için toplamaya devam ediyor //! Başlangıçta bir state değişkeni tanımlanır(count) ve başlangıç değeri atanır. 
//! 'setcount, bir React fonksiyonel bileşeninde state'i (count) güncelemek için kullanılan özel bir fonksiyondur.
//!Burada başlangıç değeri 0'a ayarlandı
//     const example =()=>{
//         setCount(count +1) //her tıklanıldığında bir artsın diye
//     console.log(count); //burada yazıldığında geriden gliyor
//     } 
//      console.log(count); 
//     asyn olduğu için burada dışarda yazılması gerekiyor diğer türlü  bir geriden geliyor .
//   return (
//   <div className="App">
//   <p>Count : {count}</p>
//   <button onClick={example}>Çalıştır</button> //her tıklanılldığında example fonksiyonunu çalıştır dedik

  
//   </div>
//   );
// }