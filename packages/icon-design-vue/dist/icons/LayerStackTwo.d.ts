import type { DefineComponent } from 'vue';

export interface LayerStackTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackTwo: DefineComponent<LayerStackTwoProps>;

export default LayerStackTwo;
export { LayerStackTwo };
