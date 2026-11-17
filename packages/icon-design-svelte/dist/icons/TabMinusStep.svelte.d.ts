import { SvelteComponent } from 'svelte';

export interface TabMinusStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusStep extends SvelteComponent<TabMinusStepProps> {}
