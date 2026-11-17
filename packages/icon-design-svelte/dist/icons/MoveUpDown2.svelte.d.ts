import { SvelteComponent } from 'svelte';

export interface MoveUpDown2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDown2 extends SvelteComponent<MoveUpDown2Props> {}
