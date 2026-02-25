import { SvelteComponent } from 'svelte';

export interface Cloud2AddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Add extends SvelteComponent<Cloud2AddProps> {}
