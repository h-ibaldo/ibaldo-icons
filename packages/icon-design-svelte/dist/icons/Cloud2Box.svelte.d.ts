import { SvelteComponent } from 'svelte';

export interface Cloud2BoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Box extends SvelteComponent<Cloud2BoxProps> {}
