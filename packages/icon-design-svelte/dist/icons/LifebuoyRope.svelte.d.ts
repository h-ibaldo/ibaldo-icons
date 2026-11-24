import { SvelteComponent } from 'svelte';

export interface LifebuoyRopeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyRope extends SvelteComponent<LifebuoyRopeProps> {}
