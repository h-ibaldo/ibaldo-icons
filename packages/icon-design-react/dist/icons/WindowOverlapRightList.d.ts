import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapRightListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapRightList: ForwardRefExoticComponent<WindowOverlapRightListProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapRightList;
export { WindowOverlapRightList };
