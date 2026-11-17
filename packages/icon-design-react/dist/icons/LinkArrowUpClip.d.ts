import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpClip: ForwardRefExoticComponent<LinkArrowUpClipProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpClip;
export { LinkArrowUpClip };
