import type { DefineComponent } from 'vue';

export interface CursorLargeCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorLargeCircle: DefineComponent<CursorLargeCircleProps>;

export default CursorLargeCircle;
export { CursorLargeCircle };
