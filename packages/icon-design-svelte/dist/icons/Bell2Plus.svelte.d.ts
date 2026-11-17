import { SvelteComponent } from 'svelte';

export interface Bell2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Plus extends SvelteComponent<Bell2PlusProps> {}
