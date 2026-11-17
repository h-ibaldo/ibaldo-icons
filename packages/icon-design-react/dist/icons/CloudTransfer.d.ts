import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTransfer: ForwardRefExoticComponent<CloudTransferProps & RefAttributes<SVGSVGElement>>;

export default CloudTransfer;
export { CloudTransfer };
