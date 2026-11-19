import type { DefineComponent } from 'vue';

export interface DoorXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorX: DefineComponent<DoorXProps>;

export default DoorX;
export { DoorX };
