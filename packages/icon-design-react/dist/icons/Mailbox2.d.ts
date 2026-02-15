import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Mailbox2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox2: ForwardRefExoticComponent<Mailbox2Props & RefAttributes<SVGSVGElement>>;

export default Mailbox2;
export { Mailbox2 };
