import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookNoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookNote: ForwardRefExoticComponent<BookNoteProps & RefAttributes<SVGSVGElement>>;

export default BookNote;
export { BookNote };
