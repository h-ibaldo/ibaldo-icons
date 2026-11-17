import { SvelteComponent } from 'svelte';

export interface ChatStackXCornerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXCornerNotch extends SvelteComponent<ChatStackXCornerNotchProps> {}
