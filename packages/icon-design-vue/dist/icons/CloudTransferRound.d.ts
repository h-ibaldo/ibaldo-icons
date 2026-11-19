import type { DefineComponent } from 'vue';

export interface CloudTransferRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTransferRound: DefineComponent<CloudTransferRoundProps>;

export default CloudTransferRound;
export { CloudTransferRound };
