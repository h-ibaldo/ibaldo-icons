import { SvelteComponent } from 'svelte';

export interface ChatXCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleSharp extends SvelteComponent<ChatXCircleSharpProps> {}
