import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [signupInput, setSignUpInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });
  const [image, setImage] = useState();

  const handleChage = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginInput({
        ...loginInput,
        [name]: value,
      });
    }

    console.log(loginInput);
  };

  const handleChange = (value, field, type) => {
    if (type === "login") {
      setLoginInput({
        ...loginInput,
        [field]: value,
      });
    }
    else{
      setSignUpInput({
        ...signupInput, 
        [field]:value
      })
    }
  };

  console.log(signupInput);
  

  return (
    <div className="w-2/3 mx-auto">
      <Tabs defaultValue="login" className="w-[400px] mx-auto mt-[20px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Create your Acount</CardTitle>
              <CardDescription>
                Create a new acount and click signup when you are done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="firstname">FirstName</Label>
                <Input
                  type="text"
                  name="firstname"
                  value={signupInput.firstname}
                  id="firstname"
                  placeholder="Enter your firstName here"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="lastname">LastName</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={signupInput.lastname}
                  placeholder="Enter your lastname here"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={signupInput.email}
                  placeholder="Enter your Email here"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={signupInput.password}
                  placeholder="Enter your password here"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="role">Role</Label>
                <Select
                  required
                  name="role"
                  value={signupInput.role}
                  onValueChange={(value) =>
                    handleChange(value, "role", "signup")
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="image">Profile image</Label>
                <Input
                  type="file"
                  name="image"
                  id="image"
                  placeholder="Enter your profile image here"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">SignUp</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login with Valid Data</CardTitle>
              <CardDescription>
                Login with your email password and role
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  name="email"
                  required="{true}"
                  type="email"
                  value={loginInput.email}
                  onChange={(e) => handleChage(e, "login")}
                  placeholder="Enter your Email"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required="{true}"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => handleChage(e, "login")}
                  placeholder="Enter your password"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="role">Role</Label>
                <Select
                  required
                  name="role"
                  value={loginInput.role}
                  onValueChange={(value) =>
                    handleChange(value, "role", "login")
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className=" w-full">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
