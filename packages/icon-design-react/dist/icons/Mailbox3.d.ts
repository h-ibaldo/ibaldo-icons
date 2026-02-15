import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox3: ForwardRefExoticComponent<Mailbox3Props & RefAttributes<SVGSVGElement>>;

export default Mailbox3;
export { Mailbox3 };
