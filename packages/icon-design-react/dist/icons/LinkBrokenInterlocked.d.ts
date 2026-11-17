import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenInterlocked: ForwardRefExoticComponent<LinkBrokenInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenInterlocked;
export { LinkBrokenInterlocked };
