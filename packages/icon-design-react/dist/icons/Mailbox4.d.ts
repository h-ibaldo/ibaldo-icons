import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox4: ForwardRefExoticComponent<Mailbox4Props & RefAttributes<SVGSVGElement>>;

export default Mailbox4;
export { Mailbox4 };
