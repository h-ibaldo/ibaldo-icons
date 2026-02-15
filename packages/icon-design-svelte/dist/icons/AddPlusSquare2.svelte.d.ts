import { SvelteComponent } from 'svelte';

export interface AddPlusSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlusSquare2 extends SvelteComponent<AddPlusSquare2Props> {}
