import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSearch: ForwardRefExoticComponent<WindowSearchProps & RefAttributes<SVGSVGElement>>;

export default WindowSearch;
export { WindowSearch };
