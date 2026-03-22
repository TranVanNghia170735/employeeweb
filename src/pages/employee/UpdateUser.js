import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
   const { id } = useParams();

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      department: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   useEffect(() => {
      const fetchEmployee = async () => {
         try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`);
            const data = await response.json();
            setFormData({
               name: data.name,
               email: data.email,
               phone: data.phone,
               department: data.department,
            });
         } catch (error) {
            console.log("Error fetching employee:", error.message);
         }
      };

      fetchEmployee();
   }, [id]);

   return (
      <>
         <div className="center-form">
            <h1>Edit Employee</h1>
            <Form>
               <Form.Group controlId="formBasicName">
                  <Form.Control
                     type="text"
                     name="name"
                     placeholder="Enter name"
                     value={formData.name}
                     onChange={handleInputChange}
                  />
               </Form.Group>
               <Form.Group controlId="formBasicEmail">
                  <Form.Control
                     type="email"
                     name="email"
                     placeholder="Enter email"
                     value={formData.email}
                     onChange={handleInputChange}
                  />
               </Form.Group>
               <Form.Group controlId="formBasicPhone">
                  <Form.Control
                     type="text"
                     name="phone"
                     placeholder="Enter phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                  />
               </Form.Group>
               <Form.Group controlId="formBasicDepartment">
                  <Form.Control
                     type="text"
                     name="department"
                     placeholder="Enter department"
                     value={formData.department}
                     onChange={handleInputChange}
                  />
               </Form.Group>
               <Button variant="primary" type="submit" className="w-100">
                  Update Empoloyee
               </Button>
            </Form>
         </div>
      </>
   );
};

export default UpdateUser;
