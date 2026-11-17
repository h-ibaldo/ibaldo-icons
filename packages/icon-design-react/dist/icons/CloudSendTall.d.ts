import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSendTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSendTall: ForwardRefExoticComponent<CloudSendTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSendTall;
export { CloudSendTall };
