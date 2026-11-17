import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowLeftClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowLeftClip: ForwardRefExoticComponent<LinkCircleArrowLeftClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowLeftClip;
export { LinkCircleArrowLeftClip };
