import type { DefineComponent } from 'vue';

export interface Text3DSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text3DSync: DefineComponent<Text3DSyncProps>;

export default Text3DSync;
export { Text3DSync };
