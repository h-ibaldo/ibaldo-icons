import { SvelteComponent } from 'svelte';

export interface CrosshairCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrosshairCorners extends SvelteComponent<CrosshairCornersProps> {}
