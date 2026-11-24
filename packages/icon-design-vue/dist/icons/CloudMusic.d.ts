import type { DefineComponent } from 'vue';

export interface CloudMusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMusic: DefineComponent<CloudMusicProps>;

export default CloudMusic;
export { CloudMusic };
