import { SvelteComponent } from 'svelte';

export interface XUndoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XUndo extends SvelteComponent<XUndoProps> {}
