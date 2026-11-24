import { SvelteComponent } from 'svelte';

export interface CommandSquareShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CommandSquareShadow extends SvelteComponent<CommandSquareShadowProps> {}
