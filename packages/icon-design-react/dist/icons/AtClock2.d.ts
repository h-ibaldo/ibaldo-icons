import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClock2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClock2: ForwardRefExoticComponent<AtClock2Props & RefAttributes<SVGSVGElement>>;

export default AtClock2;
export { AtClock2 };
