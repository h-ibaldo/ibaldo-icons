import { SvelteComponent } from 'svelte';

export interface EjectProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Eject extends SvelteComponent<EjectProps> {}
