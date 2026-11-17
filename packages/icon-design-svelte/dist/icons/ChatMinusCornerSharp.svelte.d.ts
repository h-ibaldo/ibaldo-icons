import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerSharp extends SvelteComponent<ChatMinusCornerSharpProps> {}
