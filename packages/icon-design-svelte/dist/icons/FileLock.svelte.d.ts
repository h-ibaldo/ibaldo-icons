import { SvelteComponent } from 'svelte';

export interface FileLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLock extends SvelteComponent<FileLockProps> {}
