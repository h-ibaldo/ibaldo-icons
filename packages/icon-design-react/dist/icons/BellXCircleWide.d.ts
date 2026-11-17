import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircleWide: ForwardRefExoticComponent<BellXCircleWideProps & RefAttributes<SVGSVGElement>>;

export default BellXCircleWide;
export { BellXCircleWide };
