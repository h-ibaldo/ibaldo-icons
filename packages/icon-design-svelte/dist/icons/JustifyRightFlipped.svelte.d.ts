import { SvelteComponent } from 'svelte';

export interface JustifyRightFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyRightFlipped extends SvelteComponent<JustifyRightFlippedProps> {}
