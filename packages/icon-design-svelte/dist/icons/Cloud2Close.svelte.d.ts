import { SvelteComponent } from 'svelte';

export interface Cloud2CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Close extends SvelteComponent<Cloud2CloseProps> {}
