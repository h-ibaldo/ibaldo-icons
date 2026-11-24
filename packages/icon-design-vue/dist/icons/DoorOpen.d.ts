import type { DefineComponent } from 'vue';

export interface DoorOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorOpen: DefineComponent<DoorOpenProps>;

export default DoorOpen;
export { DoorOpen };
