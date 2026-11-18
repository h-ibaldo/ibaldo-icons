import { SvelteComponent } from 'svelte';

export interface ChatXBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXBoxy extends SvelteComponent<ChatXBoxyProps> {}
