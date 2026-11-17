import { SvelteComponent } from 'svelte';

export interface AtSign5AlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Alert extends SvelteComponent<AtSign5AlertProps> {}
