import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorChatBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorChatBoxy: ForwardRefExoticComponent<MonitorChatBoxyProps & RefAttributes<SVGSVGElement>>;

export default MonitorChatBoxy;
export { MonitorChatBoxy };
