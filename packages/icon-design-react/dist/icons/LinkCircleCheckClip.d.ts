import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleCheckClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleCheckClip: ForwardRefExoticComponent<LinkCircleCheckClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleCheckClip;
export { LinkCircleCheckClip };
