import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ContactlessCardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ContactlessCard: ForwardRefExoticComponent<ContactlessCardProps & RefAttributes<SVGSVGElement>>;

export default ContactlessCard;
export { ContactlessCard };
