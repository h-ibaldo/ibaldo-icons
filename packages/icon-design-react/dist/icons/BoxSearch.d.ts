import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxSearch: ForwardRefExoticComponent<BoxSearchProps & RefAttributes<SVGSVGElement>>;

export default BoxSearch;
export { BoxSearch };
