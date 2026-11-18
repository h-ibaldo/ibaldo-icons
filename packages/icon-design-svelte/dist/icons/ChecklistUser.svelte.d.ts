import { SvelteComponent } from 'svelte';

export interface ChecklistUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistUser extends SvelteComponent<ChecklistUserProps> {}
