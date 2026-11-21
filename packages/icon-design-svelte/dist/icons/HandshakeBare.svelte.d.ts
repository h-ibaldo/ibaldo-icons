import { SvelteComponent } from 'svelte';

export interface HandshakeBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandshakeBare extends SvelteComponent<HandshakeBareProps> {}
