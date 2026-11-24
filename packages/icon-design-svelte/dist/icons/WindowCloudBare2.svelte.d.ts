import { SvelteComponent } from 'svelte';

export interface WindowCloudBare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloudBare2 extends SvelteComponent<WindowCloudBare2Props> {}
