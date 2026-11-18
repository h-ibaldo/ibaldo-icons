import { SvelteComponent } from 'svelte';

export interface NotebookSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotebookSharp extends SvelteComponent<NotebookSharpProps> {}
