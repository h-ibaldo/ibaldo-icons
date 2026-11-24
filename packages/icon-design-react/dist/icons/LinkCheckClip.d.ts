import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckClip: ForwardRefExoticComponent<LinkCheckClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckClip;
export { LinkCheckClip };
