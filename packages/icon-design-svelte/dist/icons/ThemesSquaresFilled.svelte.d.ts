import { SvelteComponent } from 'svelte';

export interface ThemesSquaresFilledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ThemesSquaresFilled extends SvelteComponent<ThemesSquaresFilledProps> {}
