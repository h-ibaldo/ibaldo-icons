import { SvelteComponent } from 'svelte';

export interface AtSign3AlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3Alert extends SvelteComponent<AtSign3AlertProps> {}
