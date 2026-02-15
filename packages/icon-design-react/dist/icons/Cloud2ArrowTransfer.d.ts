import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ArrowTransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2ArrowTransfer: ForwardRefExoticComponent<Cloud2ArrowTransferProps & RefAttributes<SVGSVGElement>>;

export default Cloud2ArrowTransfer;
export { Cloud2ArrowTransfer };
