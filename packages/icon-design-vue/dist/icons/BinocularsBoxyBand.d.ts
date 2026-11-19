import type { DefineComponent } from 'vue';

export interface BinocularsBoxyBandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsBoxyBand: DefineComponent<BinocularsBoxyBandProps>;

export default BinocularsBoxyBand;
export { BinocularsBoxyBand };
