import type { DefineComponent } from 'vue';

export interface CompassDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassDashed: DefineComponent<CompassDashedProps>;

export default CompassDashed;
export { CompassDashed };
