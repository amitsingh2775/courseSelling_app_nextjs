

import { Signup } from "@repo/ui/singup";
export default function Auth() {
  return (
    <>
      <Signup onClick={(email,password)=>{
        alert(email)
      }}></Signup>
     
    </>
  );
}
