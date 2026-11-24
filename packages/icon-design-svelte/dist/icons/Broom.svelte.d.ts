import { SvelteComponent } from 'svelte';

export interface BroomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Broom extends SvelteComponent<BroomProps> {}
