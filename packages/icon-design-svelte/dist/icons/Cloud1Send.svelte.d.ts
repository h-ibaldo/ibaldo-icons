import { SvelteComponent } from 'svelte';

export interface Cloud1SendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Send extends SvelteComponent<Cloud1SendProps> {}
