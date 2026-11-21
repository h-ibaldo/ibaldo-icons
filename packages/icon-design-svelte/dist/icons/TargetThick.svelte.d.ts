import { SvelteComponent } from 'svelte';

export interface TargetThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TargetThick extends SvelteComponent<TargetThickProps> {}
