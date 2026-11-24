import { SvelteComponent } from 'svelte';

export interface ChatImageSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageSharp extends SvelteComponent<ChatImageSharpProps> {}
