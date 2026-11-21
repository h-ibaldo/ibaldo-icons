import { SvelteComponent } from 'svelte';

export interface MoonCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonCircle extends SvelteComponent<MoonCircleProps> {}
