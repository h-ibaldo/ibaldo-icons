import { SvelteComponent } from 'svelte';

export interface Cloud3Music1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Music1 extends SvelteComponent<Cloud3Music1Props> {}
