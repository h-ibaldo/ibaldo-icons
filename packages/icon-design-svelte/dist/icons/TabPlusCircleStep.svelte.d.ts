import { SvelteComponent } from 'svelte';

export interface TabPlusCircleStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCircleStep extends SvelteComponent<TabPlusCircleStepProps> {}
