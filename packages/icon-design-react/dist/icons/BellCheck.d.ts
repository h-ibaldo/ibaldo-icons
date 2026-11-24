import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheck: ForwardRefExoticComponent<BellCheckProps & RefAttributes<SVGSVGElement>>;

export default BellCheck;
export { BellCheck };
