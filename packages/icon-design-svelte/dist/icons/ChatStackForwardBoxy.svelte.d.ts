import { SvelteComponent } from 'svelte';

export interface ChatStackForwardBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardBoxy extends SvelteComponent<ChatStackForwardBoxyProps> {}
