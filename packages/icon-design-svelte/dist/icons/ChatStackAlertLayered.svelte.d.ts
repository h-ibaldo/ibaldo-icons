import { SvelteComponent } from 'svelte';

export interface ChatStackAlertLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertLayered extends SvelteComponent<ChatStackAlertLayeredProps> {}
