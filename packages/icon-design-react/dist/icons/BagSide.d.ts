import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagSide: ForwardRefExoticComponent<BagSideProps & RefAttributes<SVGSVGElement>>;

export default BagSide;
export { BagSide };
