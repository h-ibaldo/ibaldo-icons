import type { DefineComponent } from 'vue';

export interface CloudMusicDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMusicDouble: DefineComponent<CloudMusicDoubleProps>;

export default CloudMusicDouble;
export { CloudMusicDouble };
