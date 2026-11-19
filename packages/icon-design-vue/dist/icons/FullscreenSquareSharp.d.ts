import type { DefineComponent } from 'vue';

export interface FullscreenSquareSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenSquareSharp: DefineComponent<FullscreenSquareSharpProps>;

export default FullscreenSquareSharp;
export { FullscreenSquareSharp };
