import type { DefineComponent } from 'vue';

export interface LaptopStoreProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopStore: DefineComponent<LaptopStoreProps>;

export default LaptopStore;
export { LaptopStore };
