import type { DefineComponent } from 'vue';

export interface WindowBoltWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBoltWide: DefineComponent<WindowBoltWideProps>;

export default WindowBoltWide;
export { WindowBoltWide };
