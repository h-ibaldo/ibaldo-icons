import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCompact: ForwardRefExoticComponent<LinkPlusCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCompact;
export { LinkPlusCompact };
