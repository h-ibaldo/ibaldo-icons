import { SvelteComponent } from 'svelte';

export interface AtXBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtXBoxy extends SvelteComponent<AtXBoxyProps> {}
