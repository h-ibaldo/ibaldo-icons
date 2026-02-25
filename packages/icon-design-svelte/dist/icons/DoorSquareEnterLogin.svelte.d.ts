import { SvelteComponent } from 'svelte';

export interface DoorSquareEnterLoginProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquareEnterLogin extends SvelteComponent<DoorSquareEnterLoginProps> {}
