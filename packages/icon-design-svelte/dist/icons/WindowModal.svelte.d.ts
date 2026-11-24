import { SvelteComponent } from 'svelte';

export interface WindowModalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowModal extends SvelteComponent<WindowModalProps> {}
