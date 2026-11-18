import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditClip: ForwardRefExoticComponent<LinkEditClipProps & RefAttributes<SVGSVGElement>>;

export default LinkEditClip;
export { LinkEditClip };
