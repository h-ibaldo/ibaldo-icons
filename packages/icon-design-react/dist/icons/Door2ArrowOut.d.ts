import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door2ArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door2ArrowOut: ForwardRefExoticComponent<Door2ArrowOutProps & RefAttributes<SVGSVGElement>>;

export default Door2ArrowOut;
export { Door2ArrowOut };
