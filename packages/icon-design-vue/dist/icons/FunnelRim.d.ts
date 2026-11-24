import type { DefineComponent } from 'vue';

export interface FunnelRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelRim: DefineComponent<FunnelRimProps>;

export default FunnelRim;
export { FunnelRim };
