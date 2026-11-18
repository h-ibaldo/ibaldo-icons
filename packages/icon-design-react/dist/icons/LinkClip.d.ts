import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkClip: ForwardRefExoticComponent<LinkClipProps & RefAttributes<SVGSVGElement>>;

export default LinkClip;
export { LinkClip };
