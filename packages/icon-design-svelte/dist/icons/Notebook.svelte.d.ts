import { SvelteComponent } from 'svelte';

export interface NotebookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Notebook extends SvelteComponent<NotebookProps> {}
