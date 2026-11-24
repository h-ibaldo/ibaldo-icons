import type { DefineComponent } from 'vue';

export interface AlignBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignBottom: DefineComponent<AlignBottomProps>;

export default AlignBottom;
export { AlignBottom };
