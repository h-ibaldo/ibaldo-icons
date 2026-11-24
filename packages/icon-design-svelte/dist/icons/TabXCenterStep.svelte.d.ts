import { SvelteComponent } from 'svelte';

export interface TabXCenterStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCenterStep extends SvelteComponent<TabXCenterStepProps> {}
