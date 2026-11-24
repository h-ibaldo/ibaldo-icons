import type { DefineComponent } from 'vue';

export interface BellProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bell: DefineComponent<BellProps>;

export default Bell;
export { Bell };
