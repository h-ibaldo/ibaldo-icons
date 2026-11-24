import type { DefineComponent } from 'vue';

export interface LogoutWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LogoutWide: DefineComponent<LogoutWideProps>;

export default LogoutWide;
export { LogoutWide };
