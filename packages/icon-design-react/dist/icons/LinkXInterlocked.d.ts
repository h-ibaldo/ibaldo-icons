import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXInterlocked: ForwardRefExoticComponent<LinkXInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkXInterlocked;
export { LinkXInterlocked };
