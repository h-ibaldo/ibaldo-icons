import { SvelteComponent } from 'svelte';

export interface ChatStackImageNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageNotch extends SvelteComponent<ChatStackImageNotchProps> {}
