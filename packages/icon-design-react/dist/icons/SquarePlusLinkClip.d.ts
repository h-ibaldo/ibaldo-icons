import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquarePlusLinkClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquarePlusLinkClip: ForwardRefExoticComponent<SquarePlusLinkClipProps & RefAttributes<SVGSVGElement>>;

export default SquarePlusLinkClip;
export { SquarePlusLinkClip };
