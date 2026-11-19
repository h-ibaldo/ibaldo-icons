import type { DefineComponent } from 'vue';

export interface BorderOuterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderOuter: DefineComponent<BorderOuterProps>;

export default BorderOuter;
export { BorderOuter };
