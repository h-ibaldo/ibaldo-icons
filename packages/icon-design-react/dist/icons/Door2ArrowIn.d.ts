import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door2ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door2ArrowIn: ForwardRefExoticComponent<Door2ArrowInProps & RefAttributes<SVGSVGElement>>;

export default Door2ArrowIn;
export { Door2ArrowIn };
