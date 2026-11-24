import { SvelteComponent } from 'svelte';

export interface ChatStackSunProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSun extends SvelteComponent<ChatStackSunProps> {}
