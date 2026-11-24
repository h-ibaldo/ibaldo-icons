import type { DefineComponent } from 'vue';

export interface RectanglePairDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RectanglePairDashed: DefineComponent<RectanglePairDashedProps>;

export default RectanglePairDashed;
export { RectanglePairDashed };
