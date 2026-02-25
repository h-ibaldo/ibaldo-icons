import { SvelteComponent } from 'svelte';

export interface MoveUpDownGrabber1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoveUpDownGrabber1 extends SvelteComponent<MoveUpDownGrabber1Props> {}
