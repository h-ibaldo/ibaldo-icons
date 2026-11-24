import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleXClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleXClip: ForwardRefExoticComponent<LinkCircleXClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleXClip;
export { LinkCircleXClip };
