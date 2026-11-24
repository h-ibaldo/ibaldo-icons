import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoltOffWide: ForwardRefExoticComponent<BoltOffWideProps & RefAttributes<SVGSVGElement>>;

export default BoltOffWide;
export { BoltOffWide };
