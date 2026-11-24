import type { DefineComponent } from 'vue';

export interface OptionKeyCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionKeyCircle: DefineComponent<OptionKeyCircleProps>;

export default OptionKeyCircle;
export { OptionKeyCircle };
