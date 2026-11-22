import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SortUpNarrowWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SortUpNarrowWide: ForwardRefExoticComponent<SortUpNarrowWideProps & RefAttributes<SVGSVGElement>>;

export default SortUpNarrowWide;
export { SortUpNarrowWide };
