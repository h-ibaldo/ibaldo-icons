import type { DefineComponent } from 'vue';

export interface VolumeLowWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeLowWide: DefineComponent<VolumeLowWideProps>;

export default VolumeLowWide;
export { VolumeLowWide };
