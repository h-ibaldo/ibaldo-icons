import type { DefineComponent } from 'vue';

export interface LogoutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Logout: DefineComponent<LogoutProps>;

export default Logout;
export { Logout };
