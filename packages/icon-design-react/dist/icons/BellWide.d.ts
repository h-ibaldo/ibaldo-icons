import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellWide: ForwardRefExoticComponent<BellWideProps & RefAttributes<SVGSVGElement>>;

export default BellWide;
export { BellWide };
