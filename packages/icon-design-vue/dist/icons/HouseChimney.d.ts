import type { DefineComponent } from 'vue';

export interface HouseChimneyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseChimney: DefineComponent<HouseChimneyProps>;

export default HouseChimney;
export { HouseChimney };
