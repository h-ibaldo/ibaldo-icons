import { SvelteComponent } from 'svelte';

export interface Cloud3ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Exclamation extends SvelteComponent<Cloud3ExclamationProps> {}
