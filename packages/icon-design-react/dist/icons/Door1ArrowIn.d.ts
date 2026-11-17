import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door1ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door1ArrowIn: ForwardRefExoticComponent<Door1ArrowInProps & RefAttributes<SVGSVGElement>>;

export default Door1ArrowIn;
export { Door1ArrowIn };
