import { SvelteComponent } from 'svelte';

export interface DoNotDisturbBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoNotDisturbBar extends SvelteComponent<DoNotDisturbBarProps> {}
