import type { DefineComponent } from 'vue';

export interface PipetteDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PipetteDrop: DefineComponent<PipetteDropProps>;

export default PipetteDrop;
export { PipetteDrop };
