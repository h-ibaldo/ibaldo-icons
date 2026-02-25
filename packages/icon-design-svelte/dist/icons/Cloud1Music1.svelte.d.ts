import { SvelteComponent } from 'svelte';

export interface Cloud1Music1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Music1 extends SvelteComponent<Cloud1Music1Props> {}
