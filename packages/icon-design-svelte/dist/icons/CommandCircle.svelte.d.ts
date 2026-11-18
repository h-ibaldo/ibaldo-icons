import { SvelteComponent } from 'svelte';

export interface CommandCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CommandCircle extends SvelteComponent<CommandCircleProps> {}
