import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpInterlocked: ForwardRefExoticComponent<LinkArrowUpInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpInterlocked;
export { LinkArrowUpInterlocked };
