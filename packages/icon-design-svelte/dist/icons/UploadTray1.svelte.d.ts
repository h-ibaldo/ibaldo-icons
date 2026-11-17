import { SvelteComponent } from 'svelte';

export interface UploadTray1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadTray1 extends SvelteComponent<UploadTray1Props> {}
