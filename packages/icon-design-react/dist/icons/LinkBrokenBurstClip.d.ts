import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstClip: ForwardRefExoticComponent<LinkBrokenBurstClipProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstClip;
export { LinkBrokenBurstClip };
