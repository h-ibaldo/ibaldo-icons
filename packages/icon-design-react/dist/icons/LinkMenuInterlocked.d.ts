import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuInterlocked: ForwardRefExoticComponent<LinkMenuInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuInterlocked;
export { LinkMenuInterlocked };
