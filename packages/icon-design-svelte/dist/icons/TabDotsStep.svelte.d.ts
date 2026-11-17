import { SvelteComponent } from 'svelte';

export interface TabDotsStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDotsStep extends SvelteComponent<TabDotsStepProps> {}
