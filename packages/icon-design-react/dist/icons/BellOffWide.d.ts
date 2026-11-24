import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOffWide: ForwardRefExoticComponent<BellOffWideProps & RefAttributes<SVGSVGElement>>;

export default BellOffWide;
export { BellOffWide };
