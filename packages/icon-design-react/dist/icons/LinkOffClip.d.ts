import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkOffClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkOffClip: ForwardRefExoticComponent<LinkOffClipProps & RefAttributes<SVGSVGElement>>;

export default LinkOffClip;
export { LinkOffClip };
