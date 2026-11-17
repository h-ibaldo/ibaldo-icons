import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxPlain: ForwardRefExoticComponent<BoxPlainProps & RefAttributes<SVGSVGElement>>;

export default BoxPlain;
export { BoxPlain };
