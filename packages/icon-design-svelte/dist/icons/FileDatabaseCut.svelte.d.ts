import { SvelteComponent } from 'svelte';

export interface FileDatabaseCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileDatabaseCut extends SvelteComponent<FileDatabaseCutProps> {}
