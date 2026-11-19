import type { DefineComponent } from 'vue';

export interface AtDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtDots: DefineComponent<AtDotsProps>;

export default AtDots;
export { AtDots };
