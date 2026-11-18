import { SvelteComponent } from 'svelte';

export interface AwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Award extends SvelteComponent<AwardProps> {}
