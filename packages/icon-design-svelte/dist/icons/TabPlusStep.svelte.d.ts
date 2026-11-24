import { SvelteComponent } from 'svelte';

export interface TabPlusStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusStep extends SvelteComponent<TabPlusStepProps> {}
