import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckInterlocked: ForwardRefExoticComponent<LinkCheckInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckInterlocked;
export { LinkCheckInterlocked };
