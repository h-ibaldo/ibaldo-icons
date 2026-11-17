import { SvelteComponent } from 'svelte';

export interface TabXStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXStep extends SvelteComponent<TabXStepProps> {}
