import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareCorner: ForwardRefExoticComponent<ShareCornerProps & RefAttributes<SVGSVGElement>>;

export default ShareCorner;
export { ShareCorner };
