import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorChat: ForwardRefExoticComponent<MonitorChatProps & RefAttributes<SVGSVGElement>>;

export default MonitorChat;
export { MonitorChat };
