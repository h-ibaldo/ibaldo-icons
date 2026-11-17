import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowDownTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowDownTall: ForwardRefExoticComponent<CloudArrowDownTallProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowDownTall;
export { CloudArrowDownTall };
