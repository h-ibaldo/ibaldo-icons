import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBroken: ForwardRefExoticComponent<LinkBrokenProps & RefAttributes<SVGSVGElement>>;

export default LinkBroken;
export { LinkBroken };
