import { SvelteComponent } from 'svelte';

export interface SaveSearchLongHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchLongHandle extends SvelteComponent<SaveSearchLongHandleProps> {}
