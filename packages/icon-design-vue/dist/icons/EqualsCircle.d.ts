import type { DefineComponent } from 'vue';

export interface EqualsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EqualsCircle: DefineComponent<EqualsCircleProps>;

export default EqualsCircle;
export { EqualsCircle };
