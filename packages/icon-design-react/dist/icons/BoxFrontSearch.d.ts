import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontSearch: ForwardRefExoticComponent<BoxFrontSearchProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontSearch;
export { BoxFrontSearch };
