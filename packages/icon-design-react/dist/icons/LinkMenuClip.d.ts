import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuClip: ForwardRefExoticComponent<LinkMenuClipProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuClip;
export { LinkMenuClip };
