import type { DefineComponent } from 'vue';

export interface DoorBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorBare: DefineComponent<DoorBareProps>;

export default DoorBare;
export { DoorBare };
