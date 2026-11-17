import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellPlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellPlusWide: ForwardRefExoticComponent<BellPlusWideProps & RefAttributes<SVGSVGElement>>;

export default BellPlusWide;
export { BellPlusWide };
