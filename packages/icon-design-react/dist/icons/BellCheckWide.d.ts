import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckWide: ForwardRefExoticComponent<BellCheckWideProps & RefAttributes<SVGSVGElement>>;

export default BellCheckWide;
export { BellCheckWide };
