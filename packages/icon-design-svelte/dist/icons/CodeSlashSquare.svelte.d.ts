import { SvelteComponent } from 'svelte';

export interface CodeSlashSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeSlashSquare extends SvelteComponent<CodeSlashSquareProps> {}
