import { SvelteComponent } from 'svelte';

export interface ChatHeartSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartSharp extends SvelteComponent<ChatHeartSharpProps> {}
