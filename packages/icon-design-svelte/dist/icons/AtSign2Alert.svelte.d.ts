import { SvelteComponent } from 'svelte';

export interface AtSign2AlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Alert extends SvelteComponent<AtSign2AlertProps> {}
