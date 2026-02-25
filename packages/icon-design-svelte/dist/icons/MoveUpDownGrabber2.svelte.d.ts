import { SvelteComponent } from 'svelte';

export interface MoveUpDownGrabber2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDownGrabber2 extends SvelteComponent<MoveUpDownGrabber2Props> {}
