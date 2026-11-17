import { SvelteComponent } from 'svelte';

export interface TrashArrowUpRestoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUpRestore extends SvelteComponent<TrashArrowUpRestoreProps> {}
