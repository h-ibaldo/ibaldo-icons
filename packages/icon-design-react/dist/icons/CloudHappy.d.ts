import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudHappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudHappy: ForwardRefExoticComponent<CloudHappyProps & RefAttributes<SVGSVGElement>>;

export default CloudHappy;
export { CloudHappy };
