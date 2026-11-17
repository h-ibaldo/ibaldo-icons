import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtDotsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtDotsTall: ForwardRefExoticComponent<AtDotsTallProps & RefAttributes<SVGSVGElement>>;

export default AtDotsTall;
export { AtDotsTall };
