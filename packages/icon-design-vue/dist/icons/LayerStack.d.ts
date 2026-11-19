import type { DefineComponent } from 'vue';

export interface LayerStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStack: DefineComponent<LayerStackProps>;

export default LayerStack;
export { LayerStack };
