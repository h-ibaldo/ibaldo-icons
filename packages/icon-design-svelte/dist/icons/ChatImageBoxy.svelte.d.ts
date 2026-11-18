import { SvelteComponent } from 'svelte';

export interface ChatImageBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageBoxy extends SvelteComponent<ChatImageBoxyProps> {}
