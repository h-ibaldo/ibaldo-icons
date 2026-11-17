import { SvelteComponent } from 'svelte';

export interface WindowChatCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChatCorner extends SvelteComponent<WindowChatCornerProps> {}
