import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox32: ForwardRefExoticComponent<Mailbox32Props & RefAttributes<SVGSVGElement>>;

export default Mailbox32;
export { Mailbox32 };
