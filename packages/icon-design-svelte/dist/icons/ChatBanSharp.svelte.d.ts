import { SvelteComponent } from 'svelte';

export interface ChatBanSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanSharp extends SvelteComponent<ChatBanSharpProps> {}
