import type { DefineComponent } from 'vue';

export interface LayerStackOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackOpen: DefineComponent<LayerStackOpenProps>;

export default LayerStackOpen;
export { LayerStackOpen };
