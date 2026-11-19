import type { DefineComponent } from 'vue';

export interface AntennaSidesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AntennaSides: DefineComponent<AntennaSidesProps>;

export default AntennaSides;
export { AntennaSides };
