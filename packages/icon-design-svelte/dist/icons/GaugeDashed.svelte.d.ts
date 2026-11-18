import { SvelteComponent } from 'svelte';

export interface GaugeDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDashed extends SvelteComponent<GaugeDashedProps> {}
