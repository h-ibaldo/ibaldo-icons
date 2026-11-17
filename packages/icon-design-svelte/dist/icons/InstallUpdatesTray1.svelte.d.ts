import { SvelteComponent } from 'svelte';

export interface InstallUpdatesTray1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InstallUpdatesTray1 extends SvelteComponent<InstallUpdatesTray1Props> {}
