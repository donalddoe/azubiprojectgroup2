import React from 'react'








const Stepforms = () => {
  return (
    <div>
      
    </div>
  )
}

export default Stepforms








































// const defaultData = {
//   email: '',
//   password: '',
// };
// const steps = [
//   { id: "names" },
//   { id: "contact" },
//   { id: "review" },
//   { id: "submit" },
]





export default function Stepforms() {

// const [formData, setForm] = useForm(defaultData);
// const { step, navigation } = useStep({
//   steps,
//   intialSteps:0,
// })

// switch(step.id) {
//   case "names" :
//     return <Signin/>;
//     case "contact" :
//       return <Register/>;

// }



  return (
    <div>
         <Signin />
      <Register/>
    </div>
  );
}

