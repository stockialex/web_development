import Input from "./Input";

const Login = () => (
    <form className="form" action="">
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
    <button type="submit">Login</button>
    </form>
)

export default Login;