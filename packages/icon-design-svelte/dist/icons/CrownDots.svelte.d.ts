import { SvelteComponent } from 'svelte';

export interface CrownDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownDots extends SvelteComponent<CrownDotsProps> {}
