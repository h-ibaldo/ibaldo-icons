import { SvelteComponent } from 'svelte';

export interface WindowChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChat extends SvelteComponent<WindowChatProps> {}
