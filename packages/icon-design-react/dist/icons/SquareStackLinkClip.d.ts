import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLinkClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLinkClip: ForwardRefExoticComponent<SquareStackLinkClipProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLinkClip;
export { SquareStackLinkClip };
