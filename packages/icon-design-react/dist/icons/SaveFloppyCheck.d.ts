import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveFloppyCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveFloppyCheck: ForwardRefExoticComponent<SaveFloppyCheckProps & RefAttributes<SVGSVGElement>>;

export default SaveFloppyCheck;
export { SaveFloppyCheck };
