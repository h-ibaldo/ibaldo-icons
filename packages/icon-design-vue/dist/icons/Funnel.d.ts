import type { DefineComponent } from 'vue';

export interface FunnelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Funnel: DefineComponent<FunnelProps>;

export default Funnel;
export { Funnel };
