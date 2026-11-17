import { SvelteComponent } from 'svelte';

export interface AppWindowRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowRemove extends SvelteComponent<AppWindowRemoveProps> {}
