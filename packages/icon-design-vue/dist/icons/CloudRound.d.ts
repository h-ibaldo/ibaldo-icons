import type { DefineComponent } from 'vue';

export interface CloudRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudRound: DefineComponent<CloudRoundProps>;

export default CloudRound;
export { CloudRound };
