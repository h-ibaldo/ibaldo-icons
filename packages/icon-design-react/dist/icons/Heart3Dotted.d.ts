import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart3DottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart3Dotted: ForwardRefExoticComponent<Heart3DottedProps & RefAttributes<SVGSVGElement>>;

export default Heart3Dotted;
export { Heart3Dotted };
