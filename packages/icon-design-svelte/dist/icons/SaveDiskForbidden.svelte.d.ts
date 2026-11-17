import { SvelteComponent } from 'svelte';

export interface SaveDiskForbiddenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskForbidden extends SvelteComponent<SaveDiskForbiddenProps> {}
