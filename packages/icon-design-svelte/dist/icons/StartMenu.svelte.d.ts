import { SvelteComponent } from 'svelte';

export interface StartMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StartMenu extends SvelteComponent<StartMenuProps> {}
