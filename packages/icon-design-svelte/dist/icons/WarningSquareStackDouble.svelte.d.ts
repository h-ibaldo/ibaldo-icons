import { SvelteComponent } from 'svelte';

export interface WarningSquareStackDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSquareStackDouble extends SvelteComponent<WarningSquareStackDoubleProps> {}
