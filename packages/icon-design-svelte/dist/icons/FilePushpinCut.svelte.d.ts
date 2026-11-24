import { SvelteComponent } from 'svelte';

export interface FilePushpinCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePushpinCut extends SvelteComponent<FilePushpinCutProps> {}
