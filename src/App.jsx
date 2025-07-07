// import Header from "./componants/Header";
// import Main from "./componants/Main";
// import Footer from "./componants/Footer";
// import Add from "./componants/Add";
// import Greet from "./componants/Greet";

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




const App = () => {

  const userInfo = [
    {
      username: "Sobhan",
      email: "sobhan@gmail.com",
      location: "Iran",
    },

    {
      username: "Max",
      email: "maxxx@gmail.com",
      location: "USA"
    },

    {
      username: "Ali",
      email: "alimmm@gmail.com",
      location: "Qtar",
    },
  ]



  return (
    <main>
      {userInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  )
  
}

export default App