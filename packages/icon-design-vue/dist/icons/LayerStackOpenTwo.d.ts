import type { DefineComponent } from 'vue';

export interface LayerStackOpenTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenTwo: DefineComponent<LayerStackOpenTwoProps>;

export default LayerStackOpenTwo;
export { LayerStackOpenTwo };
