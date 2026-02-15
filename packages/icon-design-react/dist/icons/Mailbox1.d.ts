import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox1: ForwardRefExoticComponent<Mailbox1Props & RefAttributes<SVGSVGElement>>;

export default Mailbox1;
export { Mailbox1 };
