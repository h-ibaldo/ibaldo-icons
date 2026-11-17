import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveFloppyArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveFloppyArrowIn: ForwardRefExoticComponent<SaveFloppyArrowInProps & RefAttributes<SVGSVGElement>>;

export default SaveFloppyArrowIn;
export { SaveFloppyArrowIn };
