import type { DefineComponent } from 'vue';

export interface AtMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtMinusCircle: DefineComponent<AtMinusCircleProps>;

export default AtMinusCircle;
export { AtMinusCircle };
