import { SvelteComponent } from 'svelte';

export interface WindowUploadPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowUploadPlain extends SvelteComponent<WindowUploadPlainProps> {}
