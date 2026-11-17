import { SvelteComponent } from 'svelte';

export interface WarningForbidden3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningForbidden3 extends SvelteComponent<WarningForbidden3Props> {}
