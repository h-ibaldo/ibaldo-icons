import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StretchVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StretchVertical: ForwardRefExoticComponent<StretchVerticalProps & RefAttributes<SVGSVGElement>>;

export default StretchVertical;
export { StretchVertical };
