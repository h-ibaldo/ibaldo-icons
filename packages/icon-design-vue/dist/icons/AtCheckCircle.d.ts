import type { DefineComponent } from 'vue';

export interface AtCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCheckCircle: DefineComponent<AtCheckCircleProps>;

export default AtCheckCircle;
export { AtCheckCircle };
