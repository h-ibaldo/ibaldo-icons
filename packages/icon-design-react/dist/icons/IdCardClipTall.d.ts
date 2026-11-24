import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IdCardClipTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IdCardClipTall: ForwardRefExoticComponent<IdCardClipTallProps & RefAttributes<SVGSVGElement>>;

export default IdCardClipTall;
export { IdCardClipTall };
