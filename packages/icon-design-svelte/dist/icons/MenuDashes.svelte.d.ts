import { SvelteComponent } from 'svelte';

export interface MenuDashesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuDashes extends SvelteComponent<MenuDashesProps> {}
