import type { DefineComponent } from 'vue';

export interface AtRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtRounded: DefineComponent<AtRoundedProps>;

export default AtRounded;
export { AtRounded };
