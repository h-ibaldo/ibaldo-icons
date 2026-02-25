import { SvelteComponent } from 'svelte';

export interface Cloud3Music2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Music2 extends SvelteComponent<Cloud3Music2Props> {}
