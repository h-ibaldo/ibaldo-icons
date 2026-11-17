import { SvelteComponent } from 'svelte';

export interface XUndoWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XUndoWide extends SvelteComponent<XUndoWideProps> {}
