import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door1ArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door1ArrowOut: ForwardRefExoticComponent<Door1ArrowOutProps & RefAttributes<SVGSVGElement>>;

export default Door1ArrowOut;
export { Door1ArrowOut };
