import { SvelteComponent } from 'svelte';

export interface AnchorCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnchorCircle extends SvelteComponent<AnchorCircleProps> {}
