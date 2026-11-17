import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckFlat: ForwardRefExoticComponent<LinkCheckFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckFlat;
export { LinkCheckFlat };
