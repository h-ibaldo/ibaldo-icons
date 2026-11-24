import { SvelteComponent } from 'svelte';

export interface ChatStackCheckCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckCornerNotch extends SvelteComponent<ChatStackCheckCornerNotchProps> {}
