import { SvelteComponent } from 'svelte';

export interface MoveUpDown3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDown3 extends SvelteComponent<MoveUpDown3Props> {}
