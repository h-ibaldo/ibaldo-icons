import { SvelteComponent } from 'svelte';

export interface FilePlusCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCut extends SvelteComponent<FilePlusCutProps> {}
