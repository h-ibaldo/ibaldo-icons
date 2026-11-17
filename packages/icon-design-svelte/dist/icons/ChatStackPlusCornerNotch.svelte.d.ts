import { SvelteComponent } from 'svelte';

export interface ChatStackPlusCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusCornerNotch extends SvelteComponent<ChatStackPlusCornerNotchProps> {}
