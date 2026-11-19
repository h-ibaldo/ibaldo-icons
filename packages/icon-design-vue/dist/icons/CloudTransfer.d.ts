import type { DefineComponent } from 'vue';

export interface CloudTransferProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTransfer: DefineComponent<CloudTransferProps>;

export default CloudTransfer;
export { CloudTransfer };
