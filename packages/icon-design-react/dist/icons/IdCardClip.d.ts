import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IdCardClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IdCardClip: ForwardRefExoticComponent<IdCardClipProps & RefAttributes<SVGSVGElement>>;

export default IdCardClip;
export { IdCardClip };
