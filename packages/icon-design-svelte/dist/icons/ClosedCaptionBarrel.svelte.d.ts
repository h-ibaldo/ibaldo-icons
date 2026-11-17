import { SvelteComponent } from 'svelte';

export interface ClosedCaptionBarrelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionBarrel extends SvelteComponent<ClosedCaptionBarrelProps> {}
