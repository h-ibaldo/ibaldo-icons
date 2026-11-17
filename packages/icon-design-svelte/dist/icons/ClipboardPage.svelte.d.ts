import { SvelteComponent } from 'svelte';

export interface ClipboardPageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPage extends SvelteComponent<ClipboardPageProps> {}
