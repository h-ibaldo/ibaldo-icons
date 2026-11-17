import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXSlanted: ForwardRefExoticComponent<LinkXSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkXSlanted;
export { LinkXSlanted };
