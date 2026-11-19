import type { DefineComponent } from 'vue';

export interface BorderInnerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderInner: DefineComponent<BorderInnerProps>;

export default BorderInner;
export { BorderInner };
