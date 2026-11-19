import type { DefineComponent } from 'vue';

export interface AtDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtDotsCircle: DefineComponent<AtDotsCircleProps>;

export default AtDotsCircle;
export { AtDotsCircle };
