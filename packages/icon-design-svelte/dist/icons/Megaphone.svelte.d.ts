import { SvelteComponent } from 'svelte';

export interface MegaphoneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Megaphone extends SvelteComponent<MegaphoneProps> {}
