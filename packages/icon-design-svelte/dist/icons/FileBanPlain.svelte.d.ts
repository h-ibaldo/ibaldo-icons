import { SvelteComponent } from 'svelte';

export interface FileBanPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBanPlain extends SvelteComponent<FileBanPlainProps> {}
