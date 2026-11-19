import type { DefineComponent } from 'vue';

export interface CloudMusicRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMusicRound: DefineComponent<CloudMusicRoundProps>;

export default CloudMusicRound;
export { CloudMusicRound };
