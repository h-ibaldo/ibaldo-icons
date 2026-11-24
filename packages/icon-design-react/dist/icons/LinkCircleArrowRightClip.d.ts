import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowRightClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowRightClip: ForwardRefExoticComponent<LinkCircleArrowRightClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowRightClip;
export { LinkCircleArrowRightClip };
