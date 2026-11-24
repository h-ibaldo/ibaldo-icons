import type { DefineComponent } from 'vue';

export interface LayerStackRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayerStackRounded: DefineComponent<LayerStackRoundedProps>;

export default LayerStackRounded;
export { LayerStackRounded };
