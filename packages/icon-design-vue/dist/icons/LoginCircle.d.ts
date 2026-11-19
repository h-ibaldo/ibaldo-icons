import type { DefineComponent } from 'vue';

export interface LoginCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LoginCircle: DefineComponent<LoginCircleProps>;

export default LoginCircle;
export { LoginCircle };
