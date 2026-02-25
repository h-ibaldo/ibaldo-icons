import { SvelteComponent } from 'svelte';

export interface HandCursorPointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandCursorPointer extends SvelteComponent<HandCursorPointerProps> {}
