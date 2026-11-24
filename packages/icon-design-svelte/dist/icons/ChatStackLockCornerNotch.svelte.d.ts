import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerNotch extends SvelteComponent<ChatStackLockCornerNotchProps> {}
