import { SvelteComponent } from 'svelte';

export interface HandStopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandStop extends SvelteComponent<HandStopProps> {}
