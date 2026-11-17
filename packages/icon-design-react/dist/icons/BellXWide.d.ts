import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXWide: ForwardRefExoticComponent<BellXWideProps & RefAttributes<SVGSVGElement>>;

export default BellXWide;
export { BellXWide };
