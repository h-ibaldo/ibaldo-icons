import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuFlat: ForwardRefExoticComponent<LinkMenuFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuFlat;
export { LinkMenuFlat };
