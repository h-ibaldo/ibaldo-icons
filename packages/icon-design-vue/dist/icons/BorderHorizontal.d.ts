import type { DefineComponent } from 'vue';

export interface BorderHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderHorizontal: DefineComponent<BorderHorizontalProps>;

export default BorderHorizontal;
export { BorderHorizontal };
