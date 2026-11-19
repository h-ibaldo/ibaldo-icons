import type { DefineComponent } from 'vue';

export interface BoxLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxLabel: DefineComponent<BoxLabelProps>;

export default BoxLabel;
export { BoxLabel };
