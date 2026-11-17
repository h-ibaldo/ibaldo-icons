import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowTransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowTransfer: ForwardRefExoticComponent<CloudArrowTransferProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowTransfer;
export { CloudArrowTransfer };
