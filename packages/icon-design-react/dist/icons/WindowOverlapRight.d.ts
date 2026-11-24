import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapRight: ForwardRefExoticComponent<WindowOverlapRightProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapRight;
export { WindowOverlapRight };
