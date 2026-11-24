import type { DefineComponent } from 'vue';

export interface DoorXBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorXBare: DefineComponent<DoorXBareProps>;

export default DoorXBare;
export { DoorXBare };
