import type { DefineComponent } from 'vue';

export interface DoorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Door: DefineComponent<DoorProps>;

export default Door;
export { Door };
