import type { DefineComponent } from 'vue';

export interface HousePentagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HousePentagon: DefineComponent<HousePentagonProps>;

export default HousePentagon;
export { HousePentagon };
