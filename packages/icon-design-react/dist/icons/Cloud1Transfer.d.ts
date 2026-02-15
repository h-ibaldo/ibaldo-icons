import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1TransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Transfer: ForwardRefExoticComponent<Cloud1TransferProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Transfer;
export { Cloud1Transfer };
