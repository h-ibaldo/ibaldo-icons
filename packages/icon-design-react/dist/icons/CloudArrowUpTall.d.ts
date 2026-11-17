import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowUpTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowUpTall: ForwardRefExoticComponent<CloudArrowUpTallProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowUpTall;
export { CloudArrowUpTall };
