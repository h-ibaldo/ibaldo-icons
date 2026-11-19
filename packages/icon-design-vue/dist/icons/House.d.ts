import type { DefineComponent } from 'vue';

export interface HouseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const House: DefineComponent<HouseProps>;

export default House;
export { House };
