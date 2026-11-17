import { SvelteComponent } from 'svelte';

export interface WindowChatRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChatRound extends SvelteComponent<WindowChatRoundProps> {}
