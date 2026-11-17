import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusInterlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusInterlocked: ForwardRefExoticComponent<LinkMinusInterlockedProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusInterlocked;
export { LinkMinusInterlocked };
