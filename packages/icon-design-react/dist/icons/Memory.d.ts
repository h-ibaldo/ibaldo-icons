import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MemoryProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Memory: ForwardRefExoticComponent<MemoryProps & RefAttributes<SVGSVGElement>>;

export default Memory;
export { Memory };
