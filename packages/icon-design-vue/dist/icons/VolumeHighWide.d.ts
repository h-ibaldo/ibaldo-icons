import type { DefineComponent } from 'vue';

export interface VolumeHighWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeHighWide: DefineComponent<VolumeHighWideProps>;

export default VolumeHighWide;
export { VolumeHighWide };
