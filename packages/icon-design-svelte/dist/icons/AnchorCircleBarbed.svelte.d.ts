import { SvelteComponent } from 'svelte';

export interface AnchorCircleBarbedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnchorCircleBarbed extends SvelteComponent<AnchorCircleBarbedProps> {}
