import { SvelteComponent } from 'svelte';

export interface FileLinkBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinkBracket extends SvelteComponent<FileLinkBracketProps> {}
