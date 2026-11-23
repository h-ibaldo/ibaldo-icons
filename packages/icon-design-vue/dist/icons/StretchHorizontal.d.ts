import type { DefineComponent } from 'vue';

export interface StretchHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StretchHorizontal: DefineComponent<StretchHorizontalProps>;

export default StretchHorizontal;
export { StretchHorizontal };
