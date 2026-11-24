import { SvelteComponent } from 'svelte';

export interface BagTaperedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagTapered extends SvelteComponent<BagTaperedProps> {}
