import type { DefineComponent } from 'vue';

export interface XSquareCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XSquareCompact: DefineComponent<XSquareCompactProps>;

export default XSquareCompact;
export { XSquareCompact };
