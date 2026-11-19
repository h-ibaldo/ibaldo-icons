import type { DefineComponent } from 'vue';

export interface TextAlignCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAlignCenter: DefineComponent<TextAlignCenterProps>;

export default TextAlignCenter;
export { TextAlignCenter };
