import { SvelteComponent } from 'svelte';

export interface ChatHeartBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartBoxy extends SvelteComponent<ChatHeartBoxyProps> {}
