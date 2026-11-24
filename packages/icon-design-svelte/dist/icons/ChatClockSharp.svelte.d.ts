import { SvelteComponent } from 'svelte';

export interface ChatClockSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockSharp extends SvelteComponent<ChatClockSharpProps> {}
