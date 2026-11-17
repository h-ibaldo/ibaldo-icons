import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowUpDownTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowUpDownTall: ForwardRefExoticComponent<CloudArrowUpDownTallProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowUpDownTall;
export { CloudArrowUpDownTall };
