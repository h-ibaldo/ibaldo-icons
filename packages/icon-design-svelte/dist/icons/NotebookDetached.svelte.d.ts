import { SvelteComponent } from 'svelte';

export interface NotebookDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotebookDetached extends SvelteComponent<NotebookDetachedProps> {}
