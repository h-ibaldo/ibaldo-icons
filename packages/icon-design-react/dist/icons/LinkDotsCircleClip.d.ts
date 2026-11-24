import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleClip: ForwardRefExoticComponent<LinkDotsCircleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleClip;
export { LinkDotsCircleClip };
