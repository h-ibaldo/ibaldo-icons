import { SvelteComponent } from 'svelte';

export interface Cloud2Music1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Music1 extends SvelteComponent<Cloud2Music1Props> {}
