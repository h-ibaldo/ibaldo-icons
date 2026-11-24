import { SvelteComponent } from 'svelte';

export interface AtCheckBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCheckBoxy extends SvelteComponent<AtCheckBoxyProps> {}
