import { SvelteComponent } from 'svelte';

export interface TabPlusCenterStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCenterStep extends SvelteComponent<TabPlusCenterStepProps> {}
