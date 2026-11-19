import type { DefineComponent } from 'vue';

export interface DoorSquareArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorSquareArrowIn: DefineComponent<DoorSquareArrowInProps>;

export default DoorSquareArrowIn;
export { DoorSquareArrowIn };
