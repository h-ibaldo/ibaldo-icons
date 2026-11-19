import type { DefineComponent } from 'vue';

export interface LoginProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Login: DefineComponent<LoginProps>;

export default Login;
export { Login };
