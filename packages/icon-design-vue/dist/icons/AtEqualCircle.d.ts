import type { DefineComponent } from 'vue';

export interface AtEqualCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtEqualCircle: DefineComponent<AtEqualCircleProps>;

export default AtEqualCircle;
export { AtEqualCircle };
