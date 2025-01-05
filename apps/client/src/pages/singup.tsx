

import { Signup } from "@repo/ui/singup";
import axios from "axios";
export default function Auth() {
  return (
    <>
      <Signup
  onClick={async (email, password) => {
    try {
      const response = await axios.post("/api/singup", { email, password });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:");
    }
  }}
></Signup>

     
    </>
  );
}
