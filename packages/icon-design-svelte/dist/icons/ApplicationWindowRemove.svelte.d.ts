import { SvelteComponent } from 'svelte';

export interface ApplicationWindowRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowRemove extends SvelteComponent<ApplicationWindowRemoveProps> {}
