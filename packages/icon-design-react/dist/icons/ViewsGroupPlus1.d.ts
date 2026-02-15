import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ViewsGroupPlus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ViewsGroupPlus1: ForwardRefExoticComponent<ViewsGroupPlus1Props & RefAttributes<SVGSVGElement>>;

export default ViewsGroupPlus1;
export { ViewsGroupPlus1 };
