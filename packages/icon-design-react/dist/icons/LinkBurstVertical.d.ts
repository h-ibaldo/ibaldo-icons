import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBurstVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBurstVertical: ForwardRefExoticComponent<LinkBurstVerticalProps & RefAttributes<SVGSVGElement>>;

export default LinkBurstVertical;
export { LinkBurstVertical };
