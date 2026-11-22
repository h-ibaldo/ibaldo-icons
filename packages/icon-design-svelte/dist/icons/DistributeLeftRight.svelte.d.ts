import { SvelteComponent } from 'svelte';

export interface DistributeLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeLeftRight extends SvelteComponent<DistributeLeftRightProps> {}
