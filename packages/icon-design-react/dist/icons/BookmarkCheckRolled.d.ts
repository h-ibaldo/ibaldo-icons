import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckRolled: ForwardRefExoticComponent<BookmarkCheckRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckRolled;
export { BookmarkCheckRolled };
