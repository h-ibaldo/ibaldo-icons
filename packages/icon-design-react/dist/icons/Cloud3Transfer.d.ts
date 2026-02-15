import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3TransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Transfer: ForwardRefExoticComponent<Cloud3TransferProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Transfer;
export { Cloud3Transfer };
