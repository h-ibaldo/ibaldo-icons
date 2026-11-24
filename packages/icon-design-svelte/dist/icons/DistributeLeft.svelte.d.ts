import { SvelteComponent } from 'svelte';

export interface DistributeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeLeft extends SvelteComponent<DistributeLeftProps> {}
