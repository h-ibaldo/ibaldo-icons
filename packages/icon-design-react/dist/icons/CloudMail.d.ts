import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMail: ForwardRefExoticComponent<CloudMailProps & RefAttributes<SVGSVGElement>>;

export default CloudMail;
export { CloudMail };
