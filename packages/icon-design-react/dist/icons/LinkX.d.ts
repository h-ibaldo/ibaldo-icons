import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkX: ForwardRefExoticComponent<LinkXProps & RefAttributes<SVGSVGElement>>;

export default LinkX;
export { LinkX };
