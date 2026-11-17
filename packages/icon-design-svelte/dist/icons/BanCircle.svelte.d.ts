import { SvelteComponent } from 'svelte';

export interface BanCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanCircle extends SvelteComponent<BanCircleProps> {}
