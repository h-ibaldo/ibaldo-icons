import { SvelteComponent } from 'svelte';

export interface HandCursorPointer2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandCursorPointer2 extends SvelteComponent<HandCursorPointer2Props> {}
