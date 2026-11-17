import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InformationCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InformationCircle2: ForwardRefExoticComponent<InformationCircle2Props & RefAttributes<SVGSVGElement>>;

export default InformationCircle2;
export { InformationCircle2 };
