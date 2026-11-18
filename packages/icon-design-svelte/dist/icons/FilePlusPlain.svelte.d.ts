import { SvelteComponent } from 'svelte';

export interface FilePlusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusPlain extends SvelteComponent<FilePlusPlainProps> {}
