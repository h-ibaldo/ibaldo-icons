import { SvelteComponent } from 'svelte';

export interface ChatBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBoxy extends SvelteComponent<ChatBoxyProps> {}
