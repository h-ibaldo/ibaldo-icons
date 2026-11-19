import type { DefineComponent } from 'vue';

export interface SunSpikyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSpiky: DefineComponent<SunSpikyProps>;

export default SunSpiky;
export { SunSpiky };
