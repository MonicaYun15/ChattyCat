import Background from "@/assets/cat2.png";
import CatFace from "@/assets/catface.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react';


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const handleLogin = async() => {

  };
  const handleSignUp = async() => {

  };
  return (
    <div className="bg-yellow-100">
    <div className="h-[100vh] w-[100vw] flex items-center 
    justify-center">
      <div className="h-[80vh] bg-white border-2 
      border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] 
      lg:w-[70vw] xl:w-[70vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center ">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">ChattyCat</h1>
              <img
                src={CatFace}
                alt="Background Cat"
                className="h-[70px] sm:h-[70px] md:h-[100px] lg:h-[100px] xl:hidden p-3" // Ocultar en pantallas xl y mostrar en otras
              />
            </div>
            <p className="font-medium text-center xl:mt-5">
                {activeTab === "login" ? "Fill in the details to log in" : "Fill in the details to get started"}
              </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs value={activeTab} 
                onValueChange={setActiveTab}
                className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger value="login" 
                className = "data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-yellow-300 p-3 focus:outline-none focus:ring-none transition-all duration-300 hover:cursor-pointer hover:text-yellow-500">Log in</TabsTrigger>
                <TabsTrigger value="signup"
                className = "data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-yellow-300 p-3 focus:outline-none focus:ring-none transition-all duration-300 hover:cursor-pointer hover:text-yellow-500">Sign up</TabsTrigger> 
              </TabsList>
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input placeholder="Email" type="email" className="rounded-full p-6 border-yellow-300" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input placeholder="Password" type="password" className="rounded-full p-6 border-yellow-300" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                <Button className="rounded-full p-6 bg-yellow-300" onClick={handleLogin}>Login</Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5" value="signup">
                <Input placeholder="Email" type="email" className="rounded-full p-6 border-yellow-300" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                <Input placeholder="Password" type="password" className="rounded-full p-6 border-yellow-300" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                <Input placeholder="Confirm Password" type="password" className="rounded-full p-6 border-yellow-300" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Input>
                <Button className="rounded-full p-6 bg-yellow-300" onClick={handleSignUp}>Sign Up</Button>
              </TabsContent>
            </Tabs>
          </div> 
        </div>
        <div className="hidden xl:flex flex-col justify-center items-center">
          <img src={Background} alt="Background Login" className="h-[300px] w-[500px] p-3" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Auth