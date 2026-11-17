import { SvelteComponent } from 'svelte';

export interface ChatSunSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSunSharp extends SvelteComponent<ChatSunSharpProps> {}
