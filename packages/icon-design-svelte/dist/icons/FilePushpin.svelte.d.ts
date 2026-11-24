import { SvelteComponent } from 'svelte';

export interface FilePushpinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePushpin extends SvelteComponent<FilePushpinProps> {}
