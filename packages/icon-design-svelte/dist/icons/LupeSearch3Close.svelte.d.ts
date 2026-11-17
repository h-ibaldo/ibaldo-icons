import { SvelteComponent } from 'svelte';

export interface LupeSearch3CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch3Close extends SvelteComponent<LupeSearch3CloseProps> {}
