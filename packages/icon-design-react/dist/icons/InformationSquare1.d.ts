import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InformationSquare1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InformationSquare1: ForwardRefExoticComponent<InformationSquare1Props & RefAttributes<SVGSVGElement>>;

export default InformationSquare1;
export { InformationSquare1 };
