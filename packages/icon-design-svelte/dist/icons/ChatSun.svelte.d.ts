import { SvelteComponent } from 'svelte';

export interface ChatSunProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSun extends SvelteComponent<ChatSunProps> {}
