// import Header from "./componants/Header";
// import Main from "./componants/Main";
// import Footer from "./componants/Footer";
// import Add from "./componants/Add";
// import Greet from "./componants/Greet";

import Card from "./componants/Card"
import CopyInput from "./componants/CopyInput"
import Counter from "./componants/Counter"
import ExampleOne from "./componants/ExampleOne"
import Example from "./componants/ExampleOne"
import ExampleTree from "./componants/ExampleTree"
import ExampleTwo from "./componants/ExampleTwo"
import IconComponents from "./componants/IconComponents"
import Person from "./componants/Person"
import ProdoctList from "./componants/ProdoctList"
import Product2 from "./componants/Product2"
import Profile from "./componants/Profile"
import ProfileCard from "./componants/ProfileCard"
import Shopping from "./componants/Shopping"
import StyleCard from "./componants/StyleCard"
import Switcher from "./componants/Switcher"
import TodoList from "./componants/TodoList"
import UserList from "./componants/userList"

// import Wellcomemessage from "./componants/Wellcomemessage";
// import Greet2 from "./componants/Greet2";
// import ProductInfo from "./componants/productInfo";

// const App = () => {
//   return <div>
//     <Header/>
//     <Main/>
//     <Footer/>
//   </div>
// };

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// const App = () => {
//   return _jsxs("section", {
//     id: "section",
//     children: [
//       _jsx("h1", {
//       children: "My Website"
//     }), 
//     _jsxs("article", {
//       children: [
//         _jsx("h2", {
//         children: "Wellcome to React JS"
//       }), 
//       _jsx("p", {
//         className: "text",
//         children: "Paragraph Content"
//       })]
//     })]
//   });
// }





// const App = () => {
//   return ( <div>
//     <Wellcomemessage />
//     <section id="section"></section>
//     <form>
//       <label htmlFor="Name">Name: </label>
//       <input type="text" placeholder="Enter Your Name" />
//     </form>
//   </div>
//   )
// };

// export default App



// import JSXRules from "./componants/JSXRules";

// const App = () => {
//   return  <div>
//     <JSXRules/>
//   </div>
// }

// export default App




// const App = () => {
// const name = "Sobhan"
// const multiply = (a, b) => a * b
// const specialClass = 'simple-class'


//   return <section>
//     <p>2 + 2 = {2 + 2}</p>
//     <h1>{name}</h1>
//     <p>My Friends List: { [ 'Soheil', 'Nima', 'Matin', 'Mobin'] }</p>
//     <p>2 * 10 = {multiply(2, 10)}</p>
//     <p className="simple-class">This is special class</p>
//   </section>
// }

// export default App



// const App = () => {
//   return <div>
//     <Greet2 />
//     <ProductInfo />
//   </div>
// }

// export default App



// const App = () => {
//   const numbers = [1,2,3,4,5]

//   return ( 
//   <main>
//     {numbers.map(number => (
//       <ul key={number}>
//         <li>{number}</li>
//       </ul>
//     ))}
//   </main>
//   );
// };

// export default App




// const App = () => {

//   const userInfo = [
//     {
//       username: "Sobhan",
//       email: "sobhan@gmail.com",
//       location: "Iran",
//     },

//     {
//       username: "Max",
//       email: "maxxx@gmail.com",
//       location: "USA"
//     },

//     {
//       username: "Ali",
//       email: "alimmm@gmail.com",
//       location: "Qtar",
//     },
//   ]



//   return (
//     <main>
//       {userInfo.map(({ username, email, location }) => (
//         <ul key={Math.random()}>
//           <li>{username}</li>
//           <li>{email}</li>
//           <li>{location}</li>
//         </ul>
//       ))}
//     </main>
//   )
  
// }

// export default App



// const App = () => {
//   return <div>
//     {/* <UserList /> */}
//     <ProdoctList />
//   </div>
  
// }

// export default App



// const App = () => {

//   return <User
//   img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXFRYYFxcVFRUYGhgYFxcXHRgVFRgYHSggGBolHRcXITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS01LS0tKy0tLS0tLSstKy0tLS0tKzAtLS0tLy0tLS0tLS0tLS0tLS0tLTUtLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcCAQj/xAA8EAABAwEFBQUGBAYCAwAAAAABAAIRAwQFEiExBkFRYXEHIoGRoRMyUrHB8CNy0eEUM0JiovGCshU0kv/EABsBAQACAwEBAAAAAAAAAAAAAAACAwEEBQYH/8QAMREAAgIBBAAEBAMJAQAAAAAAAAECEQMEEiExBTJBURNhkdEicbEGMzRCgcHh8PEU/9oADAMBAAIRAxEAPwDuKIiAIiIAiIgCIiAIiIAi1G01/wBKxUTWqzGgAEyYJj0K55Q7ZWF4L6BazCcmuBJcSMMzoIxeMKLkkSUWzrSKtXNtzYrQJbWDDMRU7pnqcvVWClaGO91zXdCD8llNMw00ZUSUWTAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAF8JRzgMyYHNc57U9rxSpfw1B01HwXOa5vdbnlr70gdJyz0w3RlKyk9rm1NO1VWUqRJbTxTrBdJGhg7zqN652G5zmfBSLZVcTLs+cZhR8cjXPdw/ZQRYyXZgWE5wDuIcJ9CtrQvHCBhJBHwn5T+xWhoPeNCf0UulWeNDHNmU+A0Ki1ZKLLVdW1VraIZaKgaMgJcBPKSR9FuLJ2i3hSdJq06zfge1gMb4cyCD1lUNtudoY3QQMjyc3QTxHzU0VKb2h7mN1wu1EHTOPmRyy1UeUS4Z224O0ey14bWmz1Phfm082vjTrGquFCs17Q9jg5pEggyCOIX5qNiLRipOdGuB8EdWnSOequfZ/t0LOfY1h+G4zIzLXRrHA/upRye5CWP2OzIvLKgIkEEcQvSuKQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICFetDHTLQ7DzABProvzltk9v8Q/C0ATmBMTvOZ1OvVda7RNo/ZtdSpWhzXRDm0wwxxDnuacJ3QM+m/iVoqOxfFn/AFT81TJpyL4pqJDYyRLTPEQcvXLyXghu8Z+H2VsbOwOzEDwn5ZhZnWMToPAE+oCbiW2zUNoSRDukzPLSSpbKRIIIOWZG/qw/RTqt2ggGCPNS7DdrnEDWNIn67lhzRlY2aQ0yO9OJuhnn8XD/AEVNY3D3h7rhmDnmBmPLKNMpHKynZ+c9+/n14qNUuFwBH396KDyRLFikV9lVzCIzE5dPhPEcDzIWwo1WPnEMJjWM/MRiH6L267HgEEHlOv7rFRsx0OY6Z9eSxuTGxl12E2xNlqeztDnGm5rGt3hsEAOEboLid5kLsdCsHtDmmQfvwX5sbTIy1iSHZ4hpO+DoV0Ls92vDajbPVOTxDXYtCAIbGgBE6b+O62EyjJA6qiIrigIiIAiIgCIiAIiIAiIgCIiAIiIAtZtJbzQs1WqNWtMTxOQ9dy2a532x3ngo06AMY3Fzo+Fmg8Sf8VGbpEoK2cqtNsc9hcXEuLpPHPM+MnX9Fp6dF9R2enjl+6l2QYp6/Q/utvc9iLjMZCfFaze024x3M9XbcwMHM9SVYKdziNFOu2y8lYLPZlrSm2zbjBRRVqdyE7p8Ft7FcYbnkOg+5W8bRjcsrGKNszwa5t3hY7RYOA8VuTTQ0VimZ3FOveyQ05eP+lo7Nd+86zEffVdCtdlkQQtXUsHLeibRLhlOt9jwtxAZrXXVbnWesHsMQRGU/wBQMEeMeXFXe3WKWHkqVbqEOHDP0gfp5K/FI1s0fU/QN2WsVaTKg/qaDkpSp/ZdbPaWODqx7h4GCPmVcFvRdo50lToIiKREIiIAiIgCIiAIiIAiIgCIiALkvbZS/EoOMRgcBxMGTPIZeq60uW9tVOXWbpU9SyVDJ0WY/Mc8ueiM8t/zhW6w0gGhoGiqN2Ph4HGFdbE3JaGZ8nSwLg2liYt5ZhktNZxC29mdKqiWSJUL7TYvTQsjWqyiqwGL1hXpgX0hSojZHqMWvrU1saqjVWZKEkWRZqrREEcVS72pCYjKR6g/fkrraAqhfTxFTlhy81nG+RkXBZOxqrArsP8AY7yxA/RdLXKOyf8A9qqZyNJ8jnjZMea6ut/H5TmZV+IIiKwrCIiAIiIAiIgCIiAIiIAiIgCoXa3YMVCnVAzY8A9HT9Qr6qt2hWlws3s2gTUOHMTEZ/ZVeRpRdlmJNzSRxGzmKzep+ZV+szIAVNsdhJr02kZh2fz+iuV4WUu7jSQN8b+S0cnLOli4VHqre9NmUyRwz8Fmsm0IJypujiY+SwsNGzgYjnrEyeuZyHPRQa+2dinDqc/dh2muYyyAJPQrCg30iTkl2XCz3mHRuW0a/JUi775o1M6Z8Dr15jorTYKgcETadMxKK7RNqV8Ila+0XkQDA9FLtbQAqvfN+MpDQuPAek/oJPJZd2Ygl2SKl4Wmcmh3QR6krPSt9UCalOBymQqlS7QAHNa6k9shzhFPEMLJxO94OgQdy3l37T0axgOY4He05j8zTDm9dOay4NK2FOMuEbRxDoLcwVTL6pkVKjT/AGlXahRwkx7p4bjx1Wi2psv4mQzcz1B/2ox7MyfFHrs0p4bTII91858YIjnouqrld02I0mAtkOkE9Afkuo0nSAeIB81tafJutGnqsTjUvc9oiLZNQIiIAiIgCIiAIiIAiIgCIiAKu7bUQ6iwndUHqCrEtXtJSxUHci0/5BVZ1eNl+mltyxfzObtscWim+N+fylbUU5JUKxMLqzqpPdBDAOOHf6qfTd3z1XN3WjquFSZpLw2PbWdiqOcZ3SY8tD4rFQ7P6Ac1/tXgta9owuOjwWvERGbSQeIV4pNkL4+gVapyXTKnCMu0VQ7O0qT8bXOJIAIJGGAIBgDXTNb25HQV8tFCFmu5uai227ZKko0T7Q+VqbbctKo5r3Mkt904nAjpnAPNbSsFlpsyWfUiuCpHY6xmp7R1E4s8ySdZkTwzKn2bZmzNILaLQRoYEjxhb72IXoNWW5P1McLoh+xDdPmoN60Jc1+5oP7KfXcvjiIz0iT4KFkq5RrrLVbUph7ZgtOu7kr3ZWwxo4NHyVCu+kG1ajGZ03DEOAdvwngugU9B0WxpFy2U6/jakekRFunNCIiAIiIAiIgCIiAIiIAiIgCh3tTLqLwMzEjwMx6KYiw1aozF00zmjbK5jpaQWEyQTnnwWemO95LdX7dDw7FTaXNOobmQd+XBaR7XNjG0tMaEQYkwuVKDi6Z2o5FNKVm+spyS0Vg0SVCs1oyWGrWk56/JSTIOPJgrVi+YyUy6wM5OYUN9EkRmOYyPmvNmu57Pde4/mcT6nNK5JcVRvLTEDPVYw4tyCh07LiyqZ+cKbSohogCApVZB0lR6p2oE4TkeH6KSSIWvtjQRwI0PBeLNa8Qz1WLobL5R7tOq8ENeC05jQjpGXmvFR2a3dO4mmHBzmyAXAQQTAkidFiMJT8pmeSMK3ECw2MOcGNENGsaAK0rDZbM2mMLfHieZWZb+LHsRzc+X4kvkERFaUhERAEREAREQBERAEREAREQBERAFWNr6GbH8i0+GY+Z8lZ1EvOxirTLN+oPAjT75qvLDdBotwz2TTKlYWgghaW/f4ik11SlTFU4jLS4gxxGRlbeyOwuLXCCDBB3EKXagudHjs6jZS7lvu1VwcNJocMOJhdmJMcNJ3wrFRNtEj2bTEb95EwJA4qHa7sl+OnLXwRLSWmDEgEdBlyC2VltdenJLzUJiQ9oEQIyLdyt4J81+Gn+Z6pttjm4wxrRlkdY6CVgvEWumC51RgaMOZA1du1zKkC2V30/ZF2Gci9gIcBO7PIr3TusF2J7nPJM94k5xEws0jFtP8VfqV24f/IV3Y6xZTo593B3yNwnFA5mOQ4qw2KzYGnqfmYWyAUa1VAFCfZBSs8WekX1Gt4n03+iuIWg2cpd5zjqAB0n65Lfra00ajfuaOqnc69giItg1QiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIvNSoGglxAAzJJgDqSq9eO3V30SQ+1UyRupzUP+AMLDkl2ycMc5+VN/kYds6AbgqtEOJwk8cpE+RzWls9uxCDqsd6bdWS2j2FD2hc0h8uZhbA7pAkzPeG5QXUzq3Vc7M1vtHUwwlGCjNUyw06c5jVSWsy0Wiu284MOyKsFKqHCQsRZmSaPjGclnAXkELxaLU1o1UrIPk82mqAtbik4j4LziNQzoFlqtgKpuyxKix7OM/CLvicfTL9VtVTLFt1YKIFCpVLHsJDpp1CJ1ObQRvVnu29KNduOjVZUbxY4GOR4HqujilHakmc7PiyRblKLS96JiIitNcIiIAiIgCIiAIiIAiIgCIiAIiIAhRa3aK8BQs1Wqf6W5fmd3W/5ELEmkrZKEXOSiu2ci7UNqH131KTHRRpEgAaPc3V7uOYgee9crbXKs9qpYmPYNS0gdYVRs1F1RwY3UnU7uq0MT322el1cFplCEFxX1LpsFZyXvrbgMA6mHHyhvmulWVsqsXBYBRpMpt3aniTqSrNYdypk7ZrSbfLPNtsYOe9RqVOq33XFbypTkKPZ38VEipcGCg2u7V/oplGxHVxJ6qVS8FlaVlIi5M9U6YAUW1KcSoNcKTIR7OI7ah9O11A7+p2NvNrtPWR4L7stetWnWx03lpbGYPoeI5aFXzbvZ8WqgS2BVpy5h4/Ew8j8wFzTZlpxPkERH1U3Txt+qN7TZJTzxg+n9j9NbKX8210Q8ZPblUbwdxH9p1H7LdLjnZ5eZo2prSe7V7jup90+eXiV2NbWmy/Ehz2jl+KaNabO4x8r5X2CIi2DnBERAEREAREQBERAEREARa6878s9n/m1WtPw6u/+RJVMvjtLAkWejP8AdVMDrgbr5hVTz44ds28Ghz5/JF179L6nRJXKu1HahlQCy0nYg12Ko4aFzfdYOMHM8wOaqt7bY22sYfaHBpPu04YOndgkdSVoar1p5tTvVRO/ofB3hmsmV210kZG1O9PHNQnWX2VYPA7rjPjvH18V6c+FNYRUbhPhyPFa0ZbXfodXU6b42Pb6rlFwupwc0FbyzthVbZmphGEq52ZkhSPPTTXZMsrpCxVbLnIXqgIKm4JCyuSp8GClSUljEY1e4UiLMVRYHtUksWKqIQI0l+VhTpPcfhK5VdFHNz/icT5fZVx24vDF+E066qvUmhrQBuVeSVRr3O14Xg3T3vpfqybd7ofOkAny0Xb9nbyFos9OqCJLe9G5wycPOVwNtWJ55La3HtBXsxPsqhaDmREtJ5tP7Hms6fN8KVvo2fFPD3q4XF010d5RUe4O0OlUAbaG+yd8bZdTPX+pnjI5q60qrXNDmkOBEggggjkRqupDJGflZ43UaXLgdZI1+n1PaIisNcIiIAiIgCIiA8VagaC5xgASSdABvK5jtXty97jToOLGDLE3J7uc6sHTPnuWbtO2oIJslI6Qajgd+oYPQnw4Fc1c9c7U523tien8I8LTis2Vd9L+5Kq2omc+fXmoznrySvJK0aPVQxpLgxWkZSNRn5Zr1XZv3EL44rLYXYqQHDLy/aFK6QnBWa+qF9s9XCVmr0YURwU1yipqiyXZbIIO75K/3VaQQFyWy1oVluS+TTy1b6jp+iint4OdrdF8Vb4d+vz/AMnSmCVMYFqbmt9OqJY9ruMHMfmGo8VtsauR52cWnTPoXqFixoaizZCj06otXe1qhpU2rXAVL2mvUE4GqLZdixuUqSK5eLsVQlQrRVyWR41JMlQqrpKou3Z6/TYFixqKMlNyzUysdJiytasNmy4mOy1YgyrBce09ezn8N2W9pzaeo0nnqqvZ3KU1Sdp2irJgx5YbZq0dhuLb+hVhtYeydx1YfHVvj5q303hwBBBB0IMg9Cvzk1ys+y21dSyuAnFTnvMJ9W8CtvFrGuJ/U81rvAI056f6fZnaEUa7rcytTbUpuxNcP9g8CpK6KaatHlpRcXT7CIiyYCx2is1jXPcYa1pc4ncAJJ8lkVL7Vbz9nZBRB71d4Z/wGb/D3W/8lDJLbFsu0+F5ssca9X/05Xf14e3tNWrEY3THAHQdYWuqL5XPfPMfVfC6QVxnzyfRcEVFbDxQqSOi9hyiWR/ehSyklTNnC7ifCvN391727j3h9fovRXnHDmnnHgR/pY9KM5I9P2JdRkqFVoqe9R3BQiyMkQgxSqFQhY6rgMzkFq7bbC7uskDjvP6BWqLmauXLHErf0N7Z78FKoDTfDxkcJ9CdCcl0C59r6dXCHHA48fdJ5Hd4rilOyGVsTXqA4pzJJOmZJklWPGo+VnOlD/085YV80d4/igsT7aBvXLbp2rewYahJG7eR47wp9v2hMQzMnfw/dR67NB6DJ8TZHn5/70b+/toQwFoMuj7lc7va/HAy3N05kxC91HlxJcSSeKh1rJiSNX+I7EdDLDirH5n6k2xXo2qODt7f04hSKbJWi/gYMtyO4hbCz3hUbk5uLnoUnBfyGxgy5Iqsy590bimxfTqOoURl6tOrXDwH0K+Ptk6AjqqtrNtTUujDR1UthUTOVKpqUjMVwZWr2FiBXsOUDE1wXXs8v40awouP4dVwHRxya4dch5cF1tfnmxPAc1xMAEExuA1I8F+hGGRIXR0Um04+x4r9oMEYZYzX813/AEr7npERbxwAuW9sX82y/lq/9qaIqNT+7Z0vCP4uP5P9Gc0f/M8F8Zq7qvqLlnu49/1Idl9/zU96+Ik+yzTeoaotq0HUIiiuy3L5TZPWGoiKCIs1l6e8OiiU0RbUPKczJ+8ZJalfREUfU2X5CMVtSiJMxp+2DoviIqjePm5eSvqKRhnpiyIiGYn1qztX1FFkvQ9L6dPH9ERYRCfRmZ7p6L9CXb/Kp/kZ/wBQvqLd0PbPJftH1D83/YkIiLonlj//2Q==" 
//   name="Alex" 
//   age={13} 
//   isMarried= "false" 
//   hobbies={["Toy's, Animation, Bike"]}
//   />
// }

// const User = ({name, age, isMarried, img, hobbies}) => {
//   return <section>
//     <img src={img} alt={name} />
//     <h1>Name: { name }</h1>
//     <h2>Age: { age }</h2>
//     <h3>isMarried: { isMarried }</h3>
//     <h4>hobbies: { hobbies }</h4>
//   </section>
// }

// export default App




// const App = () => {
//   return <div>
//     /* <Person name="sobhan" age={16} />
//     <Product2 name="iPhone" price={5000} /> */
//     <Card>
//       <h1>My Card 1</h1>
//       <p>This is some content for card 1</p>
//       <h1>My Card 2</h1>
//       <p>This is some content for card 1</p>
//       <h1>My Card 3</h1>
//       <p>This is some content for card 1</p>
//     </Card>
//   </div>
// }

// export default App



// const ValidPassword = () => <h1> Valid Password </h1>
// const InvalidPassword = () => <h1> Invalid Password </h1>

// const Password = ({isValid}) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />


// const App = () => {
//   return <section>
//     <Password isValid={true} />
//   </section>
// }

// export default App




// const Cart = () => {
//   const items = ["Wireless arbuds", "Power Bank" , "New SSD", "Phone"]


//   return <div>
//     <h1>Cart 🛒</h1>
//     {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}


//     <ul>
//       <h4>Product</h4>

//       { items.map(item => (
//         <li key={Math.random()}>{item}</li>
//       )) }
//     </ul>



//   </div>
// }



// const App = () => {
//   return (
//     <Cart />
//   )
// }

// export default App




// import React from 'react'
// import Weader from "./componants/Weader"
// import UserStatus from "./componants/UserStatus"
// import Greeting from "./componants/Greeting"

// const App = () => {
//   return <div>
//     <Weader />
//     <UserStatus LoggedIn={true} isAdmin={true} />
//     < Greeting timeOfDay="night" />
//   </div>
// }

// export default App



// import React from 'react'

// const App = () => {

//   const styles = {
//     color: "white", 
//     background: "black", 
//     padding: "2.2rem"
//   }

//   return (
//     <section>
//       <h1 style={ styles }>Inline Style</h1>
//     </section>
//   )
// }

// export default App


// import React from 'react'
// import "./index2.css";

// const App = () => {
//   return (
//   <section>
//     <h1>Separate File For Styling</h1>
//   </section>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   return <div>
//     <StyleCard />
//     <ProfileCard />
//     <IconComponents />
//   </div>
// }

// export default App



// import React from 'react'

// const Button = () => {
//   const handleClick = () => console.log(Math.round(Math.random() * 10))
//   return <button onClick={handleClick}>Click</button>
// }

// const Copy = () => {
//   const copyHandler = () => {
//     console.log('Stop stealing my content')
//   }

//   return (
//     <p onCopy={copyHandler}>
//        Lorem ipsum dolor sit amet consectetur, 
//        adipisicing elit. Itaque, temporibus. 
//        Provident voluptatem deleniti vel sint 
//        ea aut laudantium commodi suscipit?
//     </p>
//   )
// }


// const Move = () => {

//   function moveHandler() {
//     alert('Mouse move event fired')
//     console.log('mouse move event fired')
//   }

//   return (
//     <p onMouseMove={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corporis, corrupti distinctio inventore voluptas culpa blanditiis minus pariatur iure? Odio.

//     </p>
//   )
// }

// const App = () => {
//   return <section>
//     <Move />
//   </section>
  
// }

// export default App


// import React from 'react'
// import { useState  } from "react";


// const App = () => {

//   const [count, setCount] = useState(0)

//   const increment = () => setCount(count + 1)
//   const decrement = () => setCount(count - 1)

//   return <section>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//   </section>
// }

// export default App



// import React, { useState } from 'react'


// const App = () => {
// const [movies,setMovies] = useState([
//   {id: 1, title: 'Bat Man', rating: 3},
//   {id: 2, title: 'Iron Man', rating: 6}
// ])


// const handleClick = () => {
//   setMovies(
//     movies.map((m) => (m.id == 1 ? { ...movies, title: "Walter White" } : m))
//   )
// }

//   return <section>
//     {movies.map((m) => (
//       <li key={Math.random()}>{m.title}</li>
//     ))}

//     <button onClick={handleClick}>Change Name</button>

//   </section>
// }

// export default App

// import { useState } from "react"
// import ComOne from "./componants/ComOne"
// import ComTwo from "./componants/ComTwo"

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//   <section>
//     <ComOne count={count} onClickHandler={() => setCount(count + 1 )} />
//     <ComTwo count={count} onClickHandler={() => setCount(count + 1 )} />
//   </section>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <ExampleOne />
//       <ExampleTwo />
//       <ExampleTree />
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {

//   return <div>
//     <Counter />
//     <TodoList />
//     <Profile />
//     <Shopping />
//   </div>
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <CopyInput />
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return <div>
//  <Switcher /> 
//   </div>
// }

// export default App


// import React, { useState, useEffect } from 'react'

// const App = () => {
//   const [value, setValue] = useState(0)
//   const [something, setSomething] = useState(0)

//       useEffect(() => {
//   if (value > 0) {
//     console.log("call useEffect")
//     document.title = `Increment ${value}`
//   }
//   }, [value])

//   return <div>
//     <h2>{value}</h2>
//     <button onClick={() => setValue(value + 1)}>Click Me</button>
//     <button onClick={() => setSomething(value + 1)}>Increment by Something</button>
//   </div>
// }

// export default App



import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData(params) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
        )
      const data = await response.json()
      if (data && data.length) setData(data)
    }
  

    getData()
  }, [])

  return (
    <div>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App