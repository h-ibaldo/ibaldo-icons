import { SvelteComponent } from 'svelte';

export interface DoNotDisturbCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoNotDisturbCircleBar extends SvelteComponent<DoNotDisturbCircleBarProps> {}
