import { SvelteComponent } from 'svelte';

export interface ClockArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowLeft extends SvelteComponent<ClockArrowLeftProps> {}
