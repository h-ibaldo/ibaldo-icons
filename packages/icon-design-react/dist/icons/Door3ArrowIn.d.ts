import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door3ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door3ArrowIn: ForwardRefExoticComponent<Door3ArrowInProps & RefAttributes<SVGSVGElement>>;

export default Door3ArrowIn;
export { Door3ArrowIn };
