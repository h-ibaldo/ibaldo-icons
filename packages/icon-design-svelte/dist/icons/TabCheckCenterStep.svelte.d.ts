import { SvelteComponent } from 'svelte';

export interface TabCheckCenterStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCenterStep extends SvelteComponent<TabCheckCenterStepProps> {}
