import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookStackOffsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookStackOffset: ForwardRefExoticComponent<BookStackOffsetProps & RefAttributes<SVGSVGElement>>;

export default BookStackOffset;
export { BookStackOffset };
