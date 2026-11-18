import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleClip: ForwardRefExoticComponent<LinkCheckCircleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleClip;
export { LinkCheckCircleClip };
