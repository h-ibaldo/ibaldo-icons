import type { DefineComponent } from 'vue';

export interface BrowserMovieCameraProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserMovieCamera: DefineComponent<BrowserMovieCameraProps>;

export default BrowserMovieCamera;
export { BrowserMovieCamera };
