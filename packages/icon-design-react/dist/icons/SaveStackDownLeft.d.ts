import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveStackDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveStackDownLeft: ForwardRefExoticComponent<SaveStackDownLeftProps & RefAttributes<SVGSVGElement>>;

export default SaveStackDownLeft;
export { SaveStackDownLeft };
