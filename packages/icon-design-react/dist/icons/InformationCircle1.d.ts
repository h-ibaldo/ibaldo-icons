import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InformationCircle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InformationCircle1: ForwardRefExoticComponent<InformationCircle1Props & RefAttributes<SVGSVGElement>>;

export default InformationCircle1;
export { InformationCircle1 };
