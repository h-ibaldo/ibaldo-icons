import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookHeadphonesCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookHeadphonesCurved: ForwardRefExoticComponent<BookHeadphonesCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookHeadphonesCurved;
export { BookHeadphonesCurved };
