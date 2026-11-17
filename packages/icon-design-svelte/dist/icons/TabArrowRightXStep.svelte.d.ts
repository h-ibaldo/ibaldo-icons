import { SvelteComponent } from 'svelte';

export interface TabArrowRightXStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabArrowRightXStep extends SvelteComponent<TabArrowRightXStepProps> {}
