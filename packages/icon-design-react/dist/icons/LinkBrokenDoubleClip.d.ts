import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenDoubleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenDoubleClip: ForwardRefExoticComponent<LinkBrokenDoubleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenDoubleClip;
export { LinkBrokenDoubleClip };
