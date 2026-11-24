import type { DefineComponent } from 'vue';

export interface CloudMusicTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMusicTall: DefineComponent<CloudMusicTallProps>;

export default CloudMusicTall;
export { CloudMusicTall };
