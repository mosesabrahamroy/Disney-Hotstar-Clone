// import { useForm } from "react-hook-form";
// import { useState } from "react";

// export default function Form() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [display, setDisplay] = useState(null);  
//     const Submit = (data) => {
//         setDisplay(data);  
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(Submit)}>
//                 <div>
//                     <label>First Name:</label>
//                     <input type="text" {...register("firstname", { required: true })} />
//                     {errors.firstname && <span className="text-red-500">First name is required</span>}
//                 </div>

//                 <div>
//                     <label>Last Name:</label>
//                     <input type="text" {...register("lastname")} />
//                 </div>

//                 <div>
//                     <label>Age:</label>
//                     <input type="number" {...register("age", { required: true })} />
//                     {errors.age && <span className="text-red-500">Age is required</span>}
//                 </div>

//                 <div>
//                     <label>Gender:</label>
//                     <select {...register("gender")}>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                     </select>
//                 </div>

//                 <div>
//                     <label>Email:</label>
//                     <input type="email" {...register("email", { required: true })} />
//                     {errors.email && <span className="text-red-500">Email is required</span>}
//                 </div>

//                 <input type="submit" />
//             </form>

//             {display && (
//                 <div className="mt-4">
//                     <p><strong>First Name:</strong> {display.firstname}</p>
//                     <p><strong>Last Name:</strong> {display.lastname}</p>
//                     <p><strong>Age:</strong> {display.age}</p>
//                     <p><strong>Gender:</strong> {display.gender}</p>
//                     <p><strong>Email:</strong> {display.email}</p>
//                 </div>
//             )}
//         </>
//     );
// }

