import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PinSearch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PinSearch2: ForwardRefExoticComponent<PinSearch2Props & RefAttributes<SVGSVGElement>>;

export default PinSearch2;
export { PinSearch2 };
