import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxTapeArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxTapeArrowUp: ForwardRefExoticComponent<BoxTapeArrowUpProps & RefAttributes<SVGSVGElement>>;

export default BoxTapeArrowUp;
export { BoxTapeArrowUp };
