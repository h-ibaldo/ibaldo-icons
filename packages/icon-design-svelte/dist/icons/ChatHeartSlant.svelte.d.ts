import { SvelteComponent } from 'svelte';

export interface ChatHeartSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartSlant extends SvelteComponent<ChatHeartSlantProps> {}
