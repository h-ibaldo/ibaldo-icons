import { SvelteComponent } from 'svelte';

export interface HandCursorPointer3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandCursorPointer3 extends SvelteComponent<HandCursorPointer3Props> {}
