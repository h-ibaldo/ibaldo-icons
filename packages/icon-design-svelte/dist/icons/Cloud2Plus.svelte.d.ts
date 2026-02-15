import { SvelteComponent } from 'svelte';

export interface Cloud2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Plus extends SvelteComponent<Cloud2PlusProps> {}
