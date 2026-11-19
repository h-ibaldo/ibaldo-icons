import type { DefineComponent } from 'vue';

export interface DoorArrowInBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorArrowInBare: DefineComponent<DoorArrowInBareProps>;

export default DoorArrowInBare;
export { DoorArrowInBare };
