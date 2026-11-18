import { SvelteComponent } from 'svelte';

export interface AwardSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AwardSquare extends SvelteComponent<AwardSquareProps> {}
