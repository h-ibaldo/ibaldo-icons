import { SvelteComponent } from 'svelte';

export interface TabCheckStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckStep extends SvelteComponent<TabCheckStepProps> {}
