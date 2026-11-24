import type { DefineComponent } from 'vue';

export interface InfoSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoSquareSmall: DefineComponent<InfoSquareSmallProps>;

export default InfoSquareSmall;
export { InfoSquareSmall };
