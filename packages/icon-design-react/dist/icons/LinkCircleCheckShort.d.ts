import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleCheckShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleCheckShort: ForwardRefExoticComponent<LinkCircleCheckShortProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleCheckShort;
export { LinkCircleCheckShort };
