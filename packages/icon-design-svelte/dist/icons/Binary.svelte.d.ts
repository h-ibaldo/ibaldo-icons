import { SvelteComponent } from 'svelte';

export interface BinaryProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binary extends SvelteComponent<BinaryProps> {}
