import type { DefineComponent } from 'vue';

export interface CloudMailRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMailRound: DefineComponent<CloudMailRoundProps>;

export default CloudMailRound;
export { CloudMailRound };
