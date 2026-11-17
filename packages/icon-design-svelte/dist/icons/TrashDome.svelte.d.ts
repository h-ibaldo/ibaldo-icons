import { SvelteComponent } from 'svelte';

export interface TrashDomeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDome extends SvelteComponent<TrashDomeProps> {}
