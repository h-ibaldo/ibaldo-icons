import { SvelteComponent } from 'svelte';

export interface ClosedCaptionOctagonWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionOctagonWide extends SvelteComponent<ClosedCaptionOctagonWideProps> {}
