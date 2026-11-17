import { SvelteComponent } from 'svelte';

export interface AtSign4AlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Alert extends SvelteComponent<AtSign4AlertProps> {}
