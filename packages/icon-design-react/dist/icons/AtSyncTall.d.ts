import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSyncTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSyncTall: ForwardRefExoticComponent<AtSyncTallProps & RefAttributes<SVGSVGElement>>;

export default AtSyncTall;
export { AtSyncTall };
