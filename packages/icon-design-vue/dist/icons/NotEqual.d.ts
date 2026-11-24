import type { DefineComponent } from 'vue';

export interface NotEqualProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotEqual: DefineComponent<NotEqualProps>;

export default NotEqual;
export { NotEqual };
