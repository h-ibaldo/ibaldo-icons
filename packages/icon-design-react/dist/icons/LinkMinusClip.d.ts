import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusClip: ForwardRefExoticComponent<LinkMinusClipProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusClip;
export { LinkMinusClip };
