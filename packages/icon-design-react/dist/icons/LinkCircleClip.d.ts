import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleClip: ForwardRefExoticComponent<LinkCircleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleClip;
export { LinkCircleClip };
