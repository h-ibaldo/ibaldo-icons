import { SvelteComponent } from 'svelte';

export interface ChatHappySharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHappySharp extends SvelteComponent<ChatHappySharpProps> {}
