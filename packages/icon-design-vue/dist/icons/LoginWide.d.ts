import type { DefineComponent } from 'vue';

export interface LoginWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LoginWide: DefineComponent<LoginWideProps>;

export default LoginWide;
export { LoginWide };
