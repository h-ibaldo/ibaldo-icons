import { SvelteComponent } from 'svelte';

export interface TargetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Target extends SvelteComponent<TargetProps> {}
