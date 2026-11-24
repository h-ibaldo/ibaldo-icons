import { SvelteComponent } from 'svelte';

export interface AtRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtRounded extends SvelteComponent<AtRoundedProps> {}
