import type { DefineComponent } from 'vue';

export interface GearUploadAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearUploadAngled: DefineComponent<GearUploadAngledProps>;

export default GearUploadAngled;
export { GearUploadAngled };
