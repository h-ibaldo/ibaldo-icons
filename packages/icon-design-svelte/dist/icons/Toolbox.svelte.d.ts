import { SvelteComponent } from 'svelte';

export interface ToolboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Toolbox extends SvelteComponent<ToolboxProps> {}
