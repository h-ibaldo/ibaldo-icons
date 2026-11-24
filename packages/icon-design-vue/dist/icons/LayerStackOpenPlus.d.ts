import type { DefineComponent } from 'vue';

export interface LayerStackOpenPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenPlus: DefineComponent<LayerStackOpenPlusProps>;

export default LayerStackOpenPlus;
export { LayerStackOpenPlus };
