import { SvelteComponent } from 'svelte';

export interface InstallUpdatesTray2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InstallUpdatesTray2 extends SvelteComponent<InstallUpdatesTray2Props> {}
