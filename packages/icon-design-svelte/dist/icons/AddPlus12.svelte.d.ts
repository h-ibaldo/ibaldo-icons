import { SvelteComponent } from 'svelte';

export interface AddPlus12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlus12 extends SvelteComponent<AddPlus12Props> {}
