import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowRightTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowRightTall: ForwardRefExoticComponent<CloudArrowRightTallProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowRightTall;
export { CloudArrowRightTall };
