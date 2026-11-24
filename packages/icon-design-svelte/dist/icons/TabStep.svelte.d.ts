import { SvelteComponent } from 'svelte';

export interface TabStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabStep extends SvelteComponent<TabStepProps> {}
