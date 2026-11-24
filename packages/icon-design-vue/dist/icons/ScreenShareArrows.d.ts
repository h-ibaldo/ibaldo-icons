import type { DefineComponent } from 'vue';

export interface ScreenShareArrowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareArrows: DefineComponent<ScreenShareArrowsProps>;

export default ScreenShareArrows;
export { ScreenShareArrows };
