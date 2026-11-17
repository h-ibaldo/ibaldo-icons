import { SvelteComponent } from 'svelte';

export interface MoveUpDown1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDown1 extends SvelteComponent<MoveUpDown1Props> {}
