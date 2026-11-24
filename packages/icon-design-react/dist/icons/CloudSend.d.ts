import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSend: ForwardRefExoticComponent<CloudSendProps & RefAttributes<SVGSVGElement>>;

export default CloudSend;
export { CloudSend };
