import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircleWide: ForwardRefExoticComponent<BellCheckCircleWideProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircleWide;
export { BellCheckCircleWide };
