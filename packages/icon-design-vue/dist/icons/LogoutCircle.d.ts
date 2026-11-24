import type { DefineComponent } from 'vue';

export interface LogoutCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LogoutCircle: DefineComponent<LogoutCircleProps>;

export default LogoutCircle;
export { LogoutCircle };
