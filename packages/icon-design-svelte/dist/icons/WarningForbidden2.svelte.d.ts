import { SvelteComponent } from 'svelte';

export interface WarningForbidden2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningForbidden2 extends SvelteComponent<WarningForbidden2Props> {}
