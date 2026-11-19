import type { DefineComponent } from 'vue';

export interface SirenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Siren: DefineComponent<SirenProps>;

export default Siren;
export { Siren };
