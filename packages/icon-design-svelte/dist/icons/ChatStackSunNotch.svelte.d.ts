import { SvelteComponent } from 'svelte';

export interface ChatStackSunNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunNotch extends SvelteComponent<ChatStackSunNotchProps> {}
