import { SvelteComponent } from 'svelte';

export interface BagFlaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagFlared extends SvelteComponent<BagFlaredProps> {}
