import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenPageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenPage: ForwardRefExoticComponent<BookOpenPageProps & RefAttributes<SVGSVGElement>>;

export default BookOpenPage;
export { BookOpenPage };
