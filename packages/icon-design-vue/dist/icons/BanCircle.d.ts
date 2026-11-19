import type { DefineComponent } from 'vue';

export interface BanCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanCircle: DefineComponent<BanCircleProps>;

export default BanCircle;
export { BanCircle };
