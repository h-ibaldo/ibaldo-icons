import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellAlertWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellAlertWide: ForwardRefExoticComponent<BellAlertWideProps & RefAttributes<SVGSVGElement>>;

export default BellAlertWide;
export { BellAlertWide };
