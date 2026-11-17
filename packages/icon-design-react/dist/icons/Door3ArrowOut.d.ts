import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door3ArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door3ArrowOut: ForwardRefExoticComponent<Door3ArrowOutProps & RefAttributes<SVGSVGElement>>;

export default Door3ArrowOut;
export { Door3ArrowOut };
