import type { DefineComponent } from 'vue';

export interface DoorSquareXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorSquareX: DefineComponent<DoorSquareXProps>;

export default DoorSquareX;
export { DoorSquareX };
