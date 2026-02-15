import { SvelteComponent } from 'svelte';

export interface AddPlus22Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlus22 extends SvelteComponent<AddPlus22Props> {}
