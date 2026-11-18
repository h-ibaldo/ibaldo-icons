import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBandClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBandClip: ForwardRefExoticComponent<LinkEditBandClipProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBandClip;
export { LinkEditBandClip };
