import type { DefineComponent } from 'vue';

export interface VolumeMediumWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeMediumWide: DefineComponent<VolumeMediumWideProps>;

export default VolumeMediumWide;
export { VolumeMediumWide };
