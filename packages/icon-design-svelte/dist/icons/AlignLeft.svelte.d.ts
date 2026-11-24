import { SvelteComponent } from 'svelte';

export interface AlignLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignLeft extends SvelteComponent<AlignLeftProps> {}
