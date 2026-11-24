import { SvelteComponent } from 'svelte';

export interface ChatForwardSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardSharp extends SvelteComponent<ChatForwardSharpProps> {}
