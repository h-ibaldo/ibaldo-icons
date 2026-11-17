import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch2CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch2Close: ForwardRefExoticComponent<LupeSearch2CloseProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch2Close;
export { LupeSearch2Close };
