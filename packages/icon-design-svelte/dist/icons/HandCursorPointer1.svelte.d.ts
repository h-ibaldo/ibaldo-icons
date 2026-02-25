import { SvelteComponent } from 'svelte';

export interface HandCursorPointer1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandCursorPointer1 extends SvelteComponent<HandCursorPointer1Props> {}
