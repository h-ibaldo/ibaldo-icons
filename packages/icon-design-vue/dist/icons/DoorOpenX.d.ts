import type { DefineComponent } from 'vue';

export interface DoorOpenXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorOpenX: DefineComponent<DoorOpenXProps>;

export default DoorOpenX;
export { DoorOpenX };
