import { SvelteComponent } from 'svelte';

export interface Cloud1UnlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Unlock extends SvelteComponent<Cloud1UnlockProps> {}
