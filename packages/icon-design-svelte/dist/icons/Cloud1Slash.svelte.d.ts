import { SvelteComponent } from 'svelte';

export interface Cloud1SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Slash extends SvelteComponent<Cloud1SlashProps> {}
