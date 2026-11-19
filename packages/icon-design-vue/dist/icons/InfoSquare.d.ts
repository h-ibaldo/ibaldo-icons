import type { DefineComponent } from 'vue';

export interface InfoSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoSquare: DefineComponent<InfoSquareProps>;

export default InfoSquare;
export { InfoSquare };
