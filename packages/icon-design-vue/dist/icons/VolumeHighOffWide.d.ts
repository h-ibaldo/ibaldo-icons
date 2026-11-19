import type { DefineComponent } from 'vue';

export interface VolumeHighOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeHighOffWide: DefineComponent<VolumeHighOffWideProps>;

export default VolumeHighOffWide;
export { VolumeHighOffWide };
