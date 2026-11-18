import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusClip: ForwardRefExoticComponent<LinkPlusClipProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusClip;
export { LinkPlusClip };
