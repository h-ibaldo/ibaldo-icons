import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoltWide: ForwardRefExoticComponent<BoltWideProps & RefAttributes<SVGSVGElement>>;

export default BoltWide;
export { BoltWide };
