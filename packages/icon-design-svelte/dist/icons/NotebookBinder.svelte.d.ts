import { SvelteComponent } from 'svelte';

export interface NotebookBinderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotebookBinder extends SvelteComponent<NotebookBinderProps> {}
