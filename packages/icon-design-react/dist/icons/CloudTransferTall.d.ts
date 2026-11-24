import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTransferTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTransferTall: ForwardRefExoticComponent<CloudTransferTallProps & RefAttributes<SVGSVGElement>>;

export default CloudTransferTall;
export { CloudTransferTall };
