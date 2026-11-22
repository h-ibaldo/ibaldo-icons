import type { DefineComponent } from 'vue';

export interface RulerTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RulerTilted: DefineComponent<RulerTiltedProps>;

export default RulerTilted;
export { RulerTilted };
