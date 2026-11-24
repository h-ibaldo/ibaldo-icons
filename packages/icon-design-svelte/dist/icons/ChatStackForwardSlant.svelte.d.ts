import { SvelteComponent } from 'svelte';

export interface ChatStackForwardSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardSlant extends SvelteComponent<ChatStackForwardSlantProps> {}
