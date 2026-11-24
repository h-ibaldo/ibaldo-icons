import type { DefineComponent } from 'vue';

export interface MegaphoneRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MegaphoneRays: DefineComponent<MegaphoneRaysProps>;

export default MegaphoneRays;
export { MegaphoneRays };
