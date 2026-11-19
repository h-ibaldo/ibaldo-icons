import type { DefineComponent } from 'vue';

export interface HouseEavesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseEaves: DefineComponent<HouseEavesProps>;

export default HouseEaves;
export { HouseEaves };
