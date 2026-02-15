import { SvelteComponent } from 'svelte';

export interface AddPlus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlus2 extends SvelteComponent<AddPlus2Props> {}
