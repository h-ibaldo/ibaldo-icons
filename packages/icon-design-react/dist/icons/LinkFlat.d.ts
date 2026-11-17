import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkFlat: ForwardRefExoticComponent<LinkFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkFlat;
export { LinkFlat };
