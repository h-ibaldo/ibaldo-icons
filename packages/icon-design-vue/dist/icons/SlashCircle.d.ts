import type { DefineComponent } from 'vue';

export interface SlashCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SlashCircle: DefineComponent<SlashCircleProps>;

export default SlashCircle;
export { SlashCircle };
