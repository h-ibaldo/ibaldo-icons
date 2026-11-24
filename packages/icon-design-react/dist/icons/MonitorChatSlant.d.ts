import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorChatSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorChatSlant: ForwardRefExoticComponent<MonitorChatSlantProps & RefAttributes<SVGSVGElement>>;

export default MonitorChatSlant;
export { MonitorChatSlant };
