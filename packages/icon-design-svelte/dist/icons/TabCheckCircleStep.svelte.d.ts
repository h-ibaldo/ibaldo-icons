import { SvelteComponent } from 'svelte';

export interface TabCheckCircleStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCircleStep extends SvelteComponent<TabCheckCircleStepProps> {}
