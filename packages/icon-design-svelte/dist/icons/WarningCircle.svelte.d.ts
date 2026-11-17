import { SvelteComponent } from 'svelte';

export interface WarningCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningCircle extends SvelteComponent<WarningCircleProps> {}
