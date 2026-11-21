import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RegexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Regex: ForwardRefExoticComponent<RegexProps & RefAttributes<SVGSVGElement>>;

export default Regex;
export { Regex };
