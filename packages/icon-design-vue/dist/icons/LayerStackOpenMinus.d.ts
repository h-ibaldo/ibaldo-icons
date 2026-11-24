import type { DefineComponent } from 'vue';

export interface LayerStackOpenMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenMinus: DefineComponent<LayerStackOpenMinusProps>;

export default LayerStackOpenMinus;
export { LayerStackOpenMinus };
