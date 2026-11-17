import { SvelteComponent } from 'svelte';

export interface LupeSearch3MoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch3More extends SvelteComponent<LupeSearch3MoreProps> {}
