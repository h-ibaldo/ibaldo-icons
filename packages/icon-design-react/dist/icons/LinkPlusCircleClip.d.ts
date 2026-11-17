import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCircleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCircleClip: ForwardRefExoticComponent<LinkPlusCircleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCircleClip;
export { LinkPlusCircleClip };
