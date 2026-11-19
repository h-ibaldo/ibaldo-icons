import type { DefineComponent } from 'vue';

export interface CloudLinkRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLinkRound: DefineComponent<CloudLinkRoundProps>;

export default CloudLinkRound;
export { CloudLinkRound };
