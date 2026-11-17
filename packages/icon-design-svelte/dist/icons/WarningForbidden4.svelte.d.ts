import { SvelteComponent } from 'svelte';

export interface WarningForbidden4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningForbidden4 extends SvelteComponent<WarningForbidden4Props> {}
