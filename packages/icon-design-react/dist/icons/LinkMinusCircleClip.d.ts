import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleClip: ForwardRefExoticComponent<LinkMinusCircleClipProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleClip;
export { LinkMinusCircleClip };
