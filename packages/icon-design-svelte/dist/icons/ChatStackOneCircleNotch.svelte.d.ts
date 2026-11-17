import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleNotch extends SvelteComponent<ChatStackOneCircleNotchProps> {}
