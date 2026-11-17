import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellAlertFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellAlertFlat: ForwardRefExoticComponent<BellAlertFlatProps & RefAttributes<SVGSVGElement>>;

export default BellAlertFlat;
export { BellAlertFlat };
