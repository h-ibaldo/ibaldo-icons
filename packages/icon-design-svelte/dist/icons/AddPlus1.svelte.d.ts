import { SvelteComponent } from 'svelte';

export interface AddPlus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlus1 extends SvelteComponent<AddPlus1Props> {}
