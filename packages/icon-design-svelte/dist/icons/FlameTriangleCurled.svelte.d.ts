import { SvelteComponent } from 'svelte';

export interface FlameTriangleCurledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlameTriangleCurled extends SvelteComponent<FlameTriangleCurledProps> {}
