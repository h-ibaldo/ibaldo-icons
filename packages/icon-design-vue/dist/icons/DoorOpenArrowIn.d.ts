import type { DefineComponent } from 'vue';

export interface DoorOpenArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorOpenArrowIn: DefineComponent<DoorOpenArrowInProps>;

export default DoorOpenArrowIn;
export { DoorOpenArrowIn };
