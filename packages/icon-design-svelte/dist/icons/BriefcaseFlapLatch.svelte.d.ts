import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapLatchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapLatch extends SvelteComponent<BriefcaseFlapLatchProps> {}
