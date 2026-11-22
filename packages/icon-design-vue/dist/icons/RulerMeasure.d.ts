import type { DefineComponent } from 'vue';

export interface RulerMeasureProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RulerMeasure: DefineComponent<RulerMeasureProps>;

export default RulerMeasure;
export { RulerMeasure };
