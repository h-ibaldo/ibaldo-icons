import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCornerSharp extends SvelteComponent<ChatForwardCornerSharpProps> {}
