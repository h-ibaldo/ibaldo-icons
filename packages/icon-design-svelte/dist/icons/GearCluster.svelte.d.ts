import { SvelteComponent } from 'svelte';

export interface GearClusterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearCluster extends SvelteComponent<GearClusterProps> {}
