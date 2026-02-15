import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AgendaContacts2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AgendaContacts2: ForwardRefExoticComponent<AgendaContacts2Props & RefAttributes<SVGSVGElement>>;

export default AgendaContacts2;
export { AgendaContacts2 };
