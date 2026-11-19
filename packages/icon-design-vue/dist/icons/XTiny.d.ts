import type { DefineComponent } from 'vue';

export interface XTinyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XTiny: DefineComponent<XTinyProps>;

export default XTiny;
export { XTiny };
