import { SvelteComponent } from 'svelte';

export interface DistributeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeRight extends SvelteComponent<DistributeRightProps> {}
