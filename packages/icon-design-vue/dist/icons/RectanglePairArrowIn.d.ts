import type { DefineComponent } from 'vue';

export interface RectanglePairArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RectanglePairArrowIn: DefineComponent<RectanglePairArrowInProps>;

export default RectanglePairArrowIn;
export { RectanglePairArrowIn };
