import { SvelteComponent } from 'svelte';

export interface WrenchHandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchHand extends SvelteComponent<WrenchHandProps> {}
