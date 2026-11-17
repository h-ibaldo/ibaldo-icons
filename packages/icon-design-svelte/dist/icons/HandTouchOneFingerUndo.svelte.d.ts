import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerUndoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerUndo extends SvelteComponent<HandTouchOneFingerUndoProps> {}
