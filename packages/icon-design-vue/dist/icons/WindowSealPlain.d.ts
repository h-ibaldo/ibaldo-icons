import type { DefineComponent } from 'vue';

export interface WindowSealPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSealPlain: DefineComponent<WindowSealPlainProps>;

export default WindowSealPlain;
export { WindowSealPlain };
