import { SvelteComponent } from 'svelte';

export interface OptionKeyCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionKeyCircle extends SvelteComponent<OptionKeyCircleProps> {}
