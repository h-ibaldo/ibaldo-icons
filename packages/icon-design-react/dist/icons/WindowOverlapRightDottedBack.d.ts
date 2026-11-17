import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowOverlapRightDottedBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowOverlapRightDottedBack: ForwardRefExoticComponent<WindowOverlapRightDottedBackProps & RefAttributes<SVGSVGElement>>;

export default WindowOverlapRightDottedBack;
export { WindowOverlapRightDottedBack };
