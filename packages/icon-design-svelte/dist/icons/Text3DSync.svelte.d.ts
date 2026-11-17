import { SvelteComponent } from 'svelte';

export interface Text3DSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DSync extends SvelteComponent<Text3DSyncProps> {}
