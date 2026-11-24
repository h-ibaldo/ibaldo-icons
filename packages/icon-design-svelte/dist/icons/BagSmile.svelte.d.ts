import { SvelteComponent } from 'svelte';

export interface BagSmileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagSmile extends SvelteComponent<BagSmileProps> {}
