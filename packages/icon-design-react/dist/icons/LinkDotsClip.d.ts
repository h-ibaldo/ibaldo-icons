import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsClip: ForwardRefExoticComponent<LinkDotsClipProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsClip;
export { LinkDotsClip };
