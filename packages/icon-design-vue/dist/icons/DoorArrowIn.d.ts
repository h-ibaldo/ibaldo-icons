import type { DefineComponent } from 'vue';

export interface DoorArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorArrowIn: DefineComponent<DoorArrowInProps>;

export default DoorArrowIn;
export { DoorArrowIn };
