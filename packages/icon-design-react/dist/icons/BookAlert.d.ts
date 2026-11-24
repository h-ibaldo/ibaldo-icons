import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookAlert: ForwardRefExoticComponent<BookAlertProps & RefAttributes<SVGSVGElement>>;

export default BookAlert;
export { BookAlert };
