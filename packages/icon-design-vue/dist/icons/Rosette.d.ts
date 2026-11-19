import type { DefineComponent } from 'vue';

export interface RosetteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Rosette: DefineComponent<RosetteProps>;

export default Rosette;
export { Rosette };
