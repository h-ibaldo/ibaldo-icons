import type { DefineComponent } from 'vue';

export interface DoorArrowOutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DoorArrowOut: DefineComponent<DoorArrowOutProps>;

export default DoorArrowOut;
export { DoorArrowOut };
