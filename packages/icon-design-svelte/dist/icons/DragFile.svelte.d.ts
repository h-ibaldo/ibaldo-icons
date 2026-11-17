import { SvelteComponent } from 'svelte';

export interface DragFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragFile extends SvelteComponent<DragFileProps> {}
