import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSquareClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSquareClip: ForwardRefExoticComponent<LinkSquareClipProps & RefAttributes<SVGSVGElement>>;

export default LinkSquareClip;
export { LinkSquareClip };
