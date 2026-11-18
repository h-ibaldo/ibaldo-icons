import { SvelteComponent } from 'svelte';

export interface ChatSunBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSunBoxy extends SvelteComponent<ChatSunBoxyProps> {}
