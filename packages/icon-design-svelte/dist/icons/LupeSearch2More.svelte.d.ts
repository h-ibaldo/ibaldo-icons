import { SvelteComponent } from 'svelte';

export interface LupeSearch2MoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch2More extends SvelteComponent<LupeSearch2MoreProps> {}
