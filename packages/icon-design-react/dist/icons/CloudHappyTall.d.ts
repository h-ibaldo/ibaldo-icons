import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudHappyTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudHappyTall: ForwardRefExoticComponent<CloudHappyTallProps & RefAttributes<SVGSVGElement>>;

export default CloudHappyTall;
export { CloudHappyTall };
