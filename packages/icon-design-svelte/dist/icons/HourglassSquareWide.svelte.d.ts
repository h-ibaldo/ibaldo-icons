import { SvelteComponent } from 'svelte';

export interface HourglassSquareWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSquareWide extends SvelteComponent<HourglassSquareWideProps> {}
