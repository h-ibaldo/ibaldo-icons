import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeRight: ForwardRefExoticComponent<TouchScreenSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeRight;
export { TouchScreenSwipeRight };
