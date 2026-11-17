import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailSearch: ForwardRefExoticComponent<MailSearchProps & RefAttributes<SVGSVGElement>>;

export default MailSearch;
export { MailSearch };
