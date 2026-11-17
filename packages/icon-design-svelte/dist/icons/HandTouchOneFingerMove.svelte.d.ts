import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerMoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerMove extends SvelteComponent<HandTouchOneFingerMoveProps> {}
