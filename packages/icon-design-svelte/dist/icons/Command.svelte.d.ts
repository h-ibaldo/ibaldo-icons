import { SvelteComponent } from 'svelte';

export interface CommandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Command extends SvelteComponent<CommandProps> {}
