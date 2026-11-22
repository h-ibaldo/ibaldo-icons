import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SortDownNarrowWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SortDownNarrowWide: ForwardRefExoticComponent<SortDownNarrowWideProps & RefAttributes<SVGSVGElement>>;

export default SortDownNarrowWide;
export { SortDownNarrowWide };
