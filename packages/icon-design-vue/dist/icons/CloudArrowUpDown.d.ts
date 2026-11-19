import type { DefineComponent } from 'vue';

export interface CloudArrowUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpDown: DefineComponent<CloudArrowUpDownProps>;

export default CloudArrowUpDown;
export { CloudArrowUpDown };
