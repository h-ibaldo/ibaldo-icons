import { SvelteComponent } from 'svelte';

export interface ArrowCheckUpgradeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCheckUpgrade extends SvelteComponent<ArrowCheckUpgradeProps> {}
