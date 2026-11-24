import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXFlat: ForwardRefExoticComponent<LinkXFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkXFlat;
export { LinkXFlat };
