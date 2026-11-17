import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InformationSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InformationSquare2: ForwardRefExoticComponent<InformationSquare2Props & RefAttributes<SVGSVGElement>>;

export default InformationSquare2;
export { InformationSquare2 };
