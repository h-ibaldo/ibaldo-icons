import { SvelteComponent } from 'svelte';

export interface FilePushpinPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePushpinPlain extends SvelteComponent<FilePushpinPlainProps> {}
