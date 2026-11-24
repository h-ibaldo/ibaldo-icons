import { SvelteComponent } from 'svelte';

export interface FileCastPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCastPlain extends SvelteComponent<FileCastPlainProps> {}
