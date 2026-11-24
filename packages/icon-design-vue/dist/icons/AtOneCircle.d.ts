import type { DefineComponent } from 'vue';

export interface AtOneCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtOneCircle: DefineComponent<AtOneCircleProps>;

export default AtOneCircle;
export { AtOneCircle };
