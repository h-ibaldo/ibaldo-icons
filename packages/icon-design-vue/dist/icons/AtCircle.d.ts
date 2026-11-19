import type { DefineComponent } from 'vue';

export interface AtCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCircle: DefineComponent<AtCircleProps>;

export default AtCircle;
export { AtCircle };
