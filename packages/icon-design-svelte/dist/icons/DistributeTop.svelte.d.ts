import { SvelteComponent } from 'svelte';

export interface DistributeTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeTop extends SvelteComponent<DistributeTopProps> {}
