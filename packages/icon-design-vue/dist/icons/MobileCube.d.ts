import type { DefineComponent } from 'vue';

export interface MobileCubeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileCube: DefineComponent<MobileCubeProps>;

export default MobileCube;
export { MobileCube };
