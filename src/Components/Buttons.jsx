
import './Buttons.css';
const Buttons = ({btntype,btntext, handler})=>{


   

   if(btntype =="success"){
    return <button className='btn btn-success button' onClick ={handler}>{btntext}</button>;
   }

   else if (btntype === "fail" ){
    return <button className='btn btn-danger button' onClick ={handler}>{btntext}</button>;
   }
   else{
    return <button className='btn btn-primary button' onClick ={handler}>{btntext}</button>;
   }
 };

export default Buttons;
// //Named Export
// export function DangerButton() {
//     return (
//         <button className="red-btn">Delete</button>
//     )
// }

// //Also a named export
// export function SuccessButton() {
//     return (
//         <button className="green-btn">Save</button>
//     )
// }

