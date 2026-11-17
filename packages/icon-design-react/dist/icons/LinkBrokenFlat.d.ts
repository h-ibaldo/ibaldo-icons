import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenFlat: ForwardRefExoticComponent<LinkBrokenFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenFlat;
export { LinkBrokenFlat };
