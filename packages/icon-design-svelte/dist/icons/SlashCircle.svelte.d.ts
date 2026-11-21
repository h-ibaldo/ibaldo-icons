import { SvelteComponent } from 'svelte';

export interface SlashCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SlashCircle extends SvelteComponent<SlashCircleProps> {}
