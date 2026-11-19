import type { DefineComponent } from 'vue';

export interface DoorSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorSquare: DefineComponent<DoorSquareProps>;

export default DoorSquare;
export { DoorSquare };
