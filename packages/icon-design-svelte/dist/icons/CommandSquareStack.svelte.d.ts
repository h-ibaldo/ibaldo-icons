import { SvelteComponent } from 'svelte';

export interface CommandSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CommandSquareStack extends SvelteComponent<CommandSquareStackProps> {}
