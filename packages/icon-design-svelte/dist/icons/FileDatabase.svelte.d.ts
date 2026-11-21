import { SvelteComponent } from 'svelte';

export interface FileDatabaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileDatabase extends SvelteComponent<FileDatabaseProps> {}
