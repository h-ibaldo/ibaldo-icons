import { SvelteComponent } from 'svelte';

export interface Cloud2ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Exclamation extends SvelteComponent<Cloud2ExclamationProps> {}
