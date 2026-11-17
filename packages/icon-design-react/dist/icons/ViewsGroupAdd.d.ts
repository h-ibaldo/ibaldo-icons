import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ViewsGroupAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ViewsGroupAdd: ForwardRefExoticComponent<ViewsGroupAddProps & RefAttributes<SVGSVGElement>>;

export default ViewsGroupAdd;
export { ViewsGroupAdd };
