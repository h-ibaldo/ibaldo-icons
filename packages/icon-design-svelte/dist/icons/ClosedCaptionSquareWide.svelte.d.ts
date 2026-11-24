import { SvelteComponent } from 'svelte';

export interface ClosedCaptionSquareWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionSquareWide extends SvelteComponent<ClosedCaptionSquareWideProps> {}
