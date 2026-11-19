import type { DefineComponent } from 'vue';

export interface BorderNoneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderNone: DefineComponent<BorderNoneProps>;

export default BorderNone;
export { BorderNone };
