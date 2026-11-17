import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareTall: ForwardRefExoticComponent<CloudSquareTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareTall;
export { CloudSquareTall };
