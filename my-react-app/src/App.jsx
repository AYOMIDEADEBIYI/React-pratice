// import Header from '.Header/Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Button from './Button.jsx'
// import Student from './Student.jsx'
// import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import PropTypes from 'prop-types';

function App() {
    // { <Header /> }
    {/* <Food /> */}
    // <Card />
    // <Card /> 
    // {/* <Button /> */}
    {<List />}
    // <Footer />
    {/* {<Student name="Spongebob"  age={30} isStudent={true}/>}
    {<Student name="Patrick"  age={42} isStudent={false}/>}
    {<Student name="Squidward"  age={50} isStudent={false}/>}
    {<Student name="Sandy"  age={27} isStudent={true}/>}
    {<Student name="Larry"/>} */}
    const fruits = [{id: 1, name: "apple", calories: 95} ,
                          {id: 2, name: "orange", calories: 45} , 
                          {id: 3, name: "banana", calories: 105} , 
                          {id: 4, name: "coconut", calories: 159 } , 
                          {id: 5, name: "pineapple", calories:  37} ];

   const vegetables = [{id: 6, name: "potatoes", calories: 110} ,
                                 {id: 7, name: "celery", calories: 15} , 
                                {id: 8, name: "carrots", calories: 25} , 
                                {id: 9, name: "corn", calories: 63 } , 
                                 {id: 10, name: "broccoli", calories:  50} ];

     return(<>
                     {fruits.length > 0 && <List items={fruits} category="Fruits"/> } 
                     {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> } 
               </>   );

    {/* <UserGreeting isLoggedIn = {true} username = "UniquEVE" />
    </> */}
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                                    name: PropTypes.string,
                                                                    calories: PropTypes.number
  })
),
}
export default App
