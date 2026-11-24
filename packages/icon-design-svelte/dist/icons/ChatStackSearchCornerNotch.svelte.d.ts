import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerNotch extends SvelteComponent<ChatStackSearchCornerNotchProps> {}
