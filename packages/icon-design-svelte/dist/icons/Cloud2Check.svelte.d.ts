import { SvelteComponent } from 'svelte';

export interface Cloud2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Check extends SvelteComponent<Cloud2CheckProps> {}
