import { SvelteComponent } from 'svelte';

export interface TabXCircleStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCircleStep extends SvelteComponent<TabXCircleStepProps> {}
