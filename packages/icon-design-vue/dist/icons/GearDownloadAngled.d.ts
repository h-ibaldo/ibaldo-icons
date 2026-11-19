import type { DefineComponent } from 'vue';

export interface GearDownloadAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearDownloadAngled: DefineComponent<GearDownloadAngledProps>;

export default GearDownloadAngled;
export { GearDownloadAngled };
