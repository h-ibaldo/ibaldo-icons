import { SvelteComponent } from 'svelte';

export interface WindowChatRoundBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChatRoundBare extends SvelteComponent<WindowChatRoundBareProps> {}
