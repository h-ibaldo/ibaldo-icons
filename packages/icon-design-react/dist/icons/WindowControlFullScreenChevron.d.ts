import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlFullScreenChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlFullScreenChevron: ForwardRefExoticComponent<WindowControlFullScreenChevronProps & RefAttributes<SVGSVGElement>>;

export default WindowControlFullScreenChevron;
export { WindowControlFullScreenChevron };
