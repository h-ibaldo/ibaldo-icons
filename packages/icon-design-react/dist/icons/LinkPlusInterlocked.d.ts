import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusInterlocked: ForwardRefExoticComponent<LinkPlusInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusInterlocked;
export { LinkPlusInterlocked };
