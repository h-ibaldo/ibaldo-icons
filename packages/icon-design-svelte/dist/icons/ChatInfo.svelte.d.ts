import { SvelteComponent } from 'svelte';

export interface ChatInfoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfo extends SvelteComponent<ChatInfoProps> {}
