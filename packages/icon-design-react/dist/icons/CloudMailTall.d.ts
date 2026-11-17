import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMailTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMailTall: ForwardRefExoticComponent<CloudMailTallProps & RefAttributes<SVGSVGElement>>;

export default CloudMailTall;
export { CloudMailTall };
