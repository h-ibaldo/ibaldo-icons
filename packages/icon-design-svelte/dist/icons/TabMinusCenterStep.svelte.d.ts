import { SvelteComponent } from 'svelte';

export interface TabMinusCenterStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCenterStep extends SvelteComponent<TabMinusCenterStepProps> {}
