import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ViewsGroupPlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ViewsGroupPlus2: ForwardRefExoticComponent<ViewsGroupPlus2Props & RefAttributes<SVGSVGElement>>;

export default ViewsGroupPlus2;
export { ViewsGroupPlus2 };
