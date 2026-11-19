import type { DefineComponent } from 'vue';

export interface StoreBrowserDoorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StoreBrowserDoor: DefineComponent<StoreBrowserDoorProps>;

export default StoreBrowserDoor;
export { StoreBrowserDoor };
