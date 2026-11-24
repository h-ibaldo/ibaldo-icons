import type { DefineComponent } from 'vue';

export interface HouseSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseSharp: DefineComponent<HouseSharpProps>;

export default HouseSharp;
export { HouseSharp };
