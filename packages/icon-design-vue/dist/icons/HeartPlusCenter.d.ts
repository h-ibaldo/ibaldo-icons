import type { DefineComponent } from 'vue';

export interface HeartPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartPlusCenter: DefineComponent<HeartPlusCenterProps>;

export default HeartPlusCenter;
export { HeartPlusCenter };
