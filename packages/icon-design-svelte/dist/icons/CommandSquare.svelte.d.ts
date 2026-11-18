import { SvelteComponent } from 'svelte';

export interface CommandSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CommandSquare extends SvelteComponent<CommandSquareProps> {}
