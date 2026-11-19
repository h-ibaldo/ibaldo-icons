import type { DefineComponent } from 'vue';

export interface BrowserFilmProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFilm: DefineComponent<BrowserFilmProps>;

export default BrowserFilm;
export { BrowserFilm };
