import type { DefineComponent } from 'vue';

export interface BoxCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxCheck: DefineComponent<BoxCheckProps>;

export default BoxCheck;
export { BoxCheck };
