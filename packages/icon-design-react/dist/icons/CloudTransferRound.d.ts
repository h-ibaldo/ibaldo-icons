import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTransferRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTransferRound: ForwardRefExoticComponent<CloudTransferRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudTransferRound;
export { CloudTransferRound };
