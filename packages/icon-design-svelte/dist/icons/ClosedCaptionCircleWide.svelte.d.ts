import { SvelteComponent } from 'svelte';

export interface ClosedCaptionCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionCircleWide extends SvelteComponent<ClosedCaptionCircleWideProps> {}
