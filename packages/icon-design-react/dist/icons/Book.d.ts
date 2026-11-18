import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Book: ForwardRefExoticComponent<BookProps & RefAttributes<SVGSVGElement>>;

export default Book;
export { Book };
