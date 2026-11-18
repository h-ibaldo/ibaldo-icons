import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenWaveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenWave: ForwardRefExoticComponent<BookOpenWaveProps & RefAttributes<SVGSVGElement>>;

export default BookOpenWave;
export { BookOpenWave };
