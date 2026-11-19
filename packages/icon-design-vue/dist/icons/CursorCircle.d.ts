import type { DefineComponent } from 'vue';

export interface CursorCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorCircle: DefineComponent<CursorCircleProps>;

export default CursorCircle;
export { CursorCircle };
