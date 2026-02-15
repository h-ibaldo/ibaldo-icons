import { SvelteComponent } from 'svelte';

export interface Cloud1ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Exclamation extends SvelteComponent<Cloud1ExclamationProps> {}
