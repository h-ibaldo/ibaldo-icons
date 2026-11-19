import type { DefineComponent } from 'vue';

export interface PlaqueProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Plaque: DefineComponent<PlaqueProps>;

export default Plaque;
export { Plaque };
