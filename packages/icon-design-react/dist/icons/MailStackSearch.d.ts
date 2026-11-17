import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailStackSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailStackSearch: ForwardRefExoticComponent<MailStackSearchProps & RefAttributes<SVGSVGElement>>;

export default MailStackSearch;
export { MailStackSearch };
