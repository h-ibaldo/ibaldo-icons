import type { DefineComponent } from 'vue';

export interface GearClusterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearCluster: DefineComponent<GearClusterProps>;

export default GearCluster;
export { GearCluster };
