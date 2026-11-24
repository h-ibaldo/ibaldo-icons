import type { DefineComponent } from 'vue';

export interface StretchVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StretchVertical: DefineComponent<StretchVerticalProps>;

export default StretchVertical;
export { StretchVertical };
