import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StretchHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StretchHorizontal: ForwardRefExoticComponent<StretchHorizontalProps & RefAttributes<SVGSVGElement>>;

export default StretchHorizontal;
export { StretchHorizontal };
