import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudEye: ForwardRefExoticComponent<CloudEyeProps & RefAttributes<SVGSVGElement>>;

export default CloudEye;
export { CloudEye };
