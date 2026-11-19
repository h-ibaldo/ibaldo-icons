import type { DefineComponent } from 'vue';

export interface WindowGlobeMapPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowGlobeMapPlain: DefineComponent<WindowGlobeMapPlainProps>;

export default WindowGlobeMapPlain;
export { WindowGlobeMapPlain };
