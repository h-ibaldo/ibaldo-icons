import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxLabelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxLabel: ForwardRefExoticComponent<BoxLabelProps & RefAttributes<SVGSVGElement>>;

export default BoxLabel;
export { BoxLabel };
