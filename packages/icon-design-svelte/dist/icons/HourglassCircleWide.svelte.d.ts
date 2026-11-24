import { SvelteComponent } from 'svelte';

export interface HourglassCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCircleWide extends SvelteComponent<HourglassCircleWideProps> {}
