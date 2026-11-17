import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusSlanted: ForwardRefExoticComponent<LinkMinusSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusSlanted;
export { LinkMinusSlanted };
