import { SvelteComponent } from 'svelte';

export interface ChatStackEditBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditBoxy extends SvelteComponent<ChatStackEditBoxyProps> {}
