import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveBan: ForwardRefExoticComponent<SaveBanProps & RefAttributes<SVGSVGElement>>;

export default SaveBan;
export { SaveBan };
