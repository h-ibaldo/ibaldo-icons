import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuCompact: ForwardRefExoticComponent<LinkMenuCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuCompact;
export { LinkMenuCompact };
