import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AgendaContacts3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AgendaContacts3: ForwardRefExoticComponent<AgendaContacts3Props & RefAttributes<SVGSVGElement>>;

export default AgendaContacts3;
export { AgendaContacts3 };
