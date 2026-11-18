import { SvelteComponent } from 'svelte';

export interface CodeSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeSlash extends SvelteComponent<CodeSlashProps> {}
