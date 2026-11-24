import { SvelteComponent } from 'svelte';

export interface ChatStackTextLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextLayered extends SvelteComponent<ChatStackTextLayeredProps> {}
