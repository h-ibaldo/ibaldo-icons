import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox42: ForwardRefExoticComponent<Mailbox42Props & RefAttributes<SVGSVGElement>>;

export default Mailbox42;
export { Mailbox42 };
