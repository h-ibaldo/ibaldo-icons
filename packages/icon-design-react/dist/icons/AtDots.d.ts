import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtDots: ForwardRefExoticComponent<AtDotsProps & RefAttributes<SVGSVGElement>>;

export default AtDots;
export { AtDots };
